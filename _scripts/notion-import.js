const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require("moment");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function convertYoutubeMarkdown(body) {
    const regex = /\[video\]\((https:\/\/youtu\.be\/([\w-]+))\)/g;
    return body.replace(regex, (_, url, id) => `{% include embed/youtube.html id='${id}' %}`);
}

function escapeCodeBlock(body) {
  const regex = /```([\s\S]*?)```/g;
  return body.replace(regex, function (match, htmlBlock) {
    return "\n{% raw %}\n```" + htmlBlock.trim() + "\n```\n{% endraw %}\n";
  });
}

function replaceTitleOutsideRawBlocks(body) {
  const rawBlocks = [];
  const placeholder = "%%RAW_BLOCK%%";
  body = body.replace(/{% raw %}[\s\S]*?{% endraw %}/g, (match) => {
    rawBlocks.push(match);
    return placeholder;
  });

  const regex = /\n#[^\n]+\n/g;
  body = body.replace(regex, function (match) {
    return "\n" + match.replace("\n#", "\n##");
  });

  rawBlocks.forEach(block => {
    body = body.replace(placeholder, block);
  });

  return body;
}

// 이미지 레이아웃 정보를 추출하는 함수
async function getImageLayoutInfo(pageId) {
  const imageInfo = new Map();
  const columnGroups = [];
  
  try {
    const blocks = await getAllBlocks(pageId);
    
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      
      // 컬럼 리스트 블록 감지
      if (block.type === 'column_list') {
        const columnGroup = {
          id: block.id,
          columns: []
        };
        
        // 컬럼 리스트의 하위 컬럼들 찾기
        for (let j = i + 1; j < blocks.length; j++) {
          const childBlock = blocks[j];
          if (childBlock.type === 'column' && childBlock.parent?.block_id === block.id) {
            const columnImages = [];
            
            // 각 컬럼 내의 이미지들 찾기
            const columnChildren = await getAllBlocks(childBlock.id);
            for (const child of columnChildren) {
              if (child.type === 'image' && child.image) {
                const imageUrl = child.image.file?.url || child.image.external?.url;
                if (imageUrl) {
                  columnImages.push({
                    url: imageUrl,
                    width: child.image.width || null,
                    height: child.image.height || null,
                    caption: child.image.caption?.map(c => c.plain_text).join('') || '',
                    blockId: child.id
                  });
                }
              }
            }
            
            if (columnImages.length > 0) {
              columnGroup.columns.push(columnImages);
            }
          }
        }
        
        if (columnGroup.columns.length > 0) {
          columnGroups.push(columnGroup);
        }
      }
      
      // 일반 이미지 블록 처리
      if (block.type === 'image' && block.image) {
        const imageUrl = block.image.file?.url || block.image.external?.url;
        if (imageUrl) {
          imageInfo.set(imageUrl, {
            url: imageUrl,
            width: block.image.width || null,
            height: block.image.height || null,
            caption: block.image.caption?.map(c => c.plain_text).join('') || '',
            blockId: block.id,
            isInColumn: false
          });
        }
      }
    }
    
    // 컬럼 그룹의 이미지들을 imageInfo에 추가
    columnGroups.forEach((group, groupIndex) => {
      group.columns.forEach((columnImages, columnIndex) => {
        columnImages.forEach((img, imgIndex) => {
          imageInfo.set(img.url, {
            ...img,
            isInColumn: true,
            columnGroupIndex: groupIndex,
            columnIndex: columnIndex,
            totalColumns: group.columns.length
          });
        });
      });
    });
    
  } catch (error) {
    console.warn('이미지 레이아웃 정보를 가져오는 중 오류:', error);
  }
  
  return { imageInfo, columnGroups };
}

// 모든 블록을 재귀적으로 가져오는 함수
async function getAllBlocks(blockId) {
  const blocks = [];
  let cursor = undefined;
  
  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    
    blocks.push(...response.results);
    cursor = response.next_cursor;
    
    // 하위 블록이 있는 경우 재귀적으로 가져오기
    for (const block of response.results) {
      if (block.has_children) {
        const childBlocks = await getAllBlocks(block.id);
        blocks.push(...childBlocks);
      }
    }
  } while (cursor);
  
  return blocks;
}

// 컬럼 그룹 마크다운 처리 함수
function processColumnGroups(body, columnGroups, ftitle) {
  columnGroups.forEach((group, groupIndex) => {
    if (group.columns.length <= 1) return;
    
    // 컬럼 그룹 시작 마커 추가
    const startMarker = `<!-- COLUMN_GROUP_START_${groupIndex} -->`;
    const endMarker = `<!-- COLUMN_GROUP_END_${groupIndex} -->`;
    
    // 각 컬럼의 이미지들을 HTML div로 래핑
    let columnHtml = `\n<div class="notion-column-group" style="display: flex; gap: 10px; flex-wrap: wrap;">\n`;
    
    group.columns.forEach((columnImages, columnIndex) => {
      const columnWidth = Math.floor(100 / group.columns.length);
      columnHtml += `<div class="notion-column" style="flex: 1; min-width: ${columnWidth}%;">\n`;
      
      columnImages.forEach((img, imgIndex) => {
        const imgElement = `<img src="/assets/img/${ftitle}/${groupIndex}-${columnIndex}-${imgIndex}.png" alt="${img.caption}" style="width: 100%; height: auto; margin-bottom: 10px;" />\n`;
        columnHtml += imgElement;
      });
      
      columnHtml += `</div>\n`;
    });
    
    columnHtml += `</div>\n`;
    
    // 기존 개별 이미지들을 컬럼 그룹으로 교체
    // 이는 복잡하므로 간단한 접근: 연속된 이미지들을 감지하여 그룹화
    body = body.replace(
      new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g'),
      columnHtml
    );
  });
  
  return body;
}

// 이미지 마크다운 처리 함수
function processImageMarkdown(md, imageInfo, columnGroups, ftitle) {
  let index = 0;
  const processedUrls = new Set();
  
  // 먼저 컬럼 그룹 처리
  columnGroups.forEach((group, groupIndex) => {
    if (group.columns.length <= 1) return;
    
    let columnHtml = `\n<div class="notion-column-group" style="display: flex; gap: 10px; flex-wrap: wrap;">\n`;
    
    group.columns.forEach((columnImages, columnIndex) => {
      const columnWidth = Math.floor(100 / group.columns.length);
      columnHtml += `<div class="notion-column" style="flex: 1; min-width: ${columnWidth}%;">\n`;
      
      columnImages.forEach((img, imgIndex) => {
        // 이미지 다운로드
        const dirname = path.join("assets/img", ftitle);
        if (!fs.existsSync(dirname)) {
          fs.mkdirSync(dirname, { recursive: true });
        }
        const filename = path.join(dirname, `${groupIndex}-${columnIndex}-${imgIndex}.png`);
        
        downloadImage(img.url, filename);
        
        // 이미지 사이즈 정보 적용
        let styleAttr = 'width: 100%; height: auto; margin-bottom: 10px;';
        
        // Notion에서 설정한 크기 정보가 있으면 적용
        if (img.width || img.height) {
          styleAttr = '';
          
          if (img.width) {
            const width = typeof img.width === 'number' ? 
              `${img.width}px` : 
              img.width;
            styleAttr += `width: ${width}; `;
          }
          
          if (img.height) {
            const height = typeof img.height === 'number' ? 
              `${img.height}px` : 
              img.height;
            styleAttr += `height: ${height}; `;
          }
          
          // 컬럼 내에서는 최대 너비 제한 및 반응형 적용
          styleAttr += 'max-width: 100%; height: auto; margin-bottom: 10px;';
        }
        
        const imgElement = `<img src="/${filename}" alt="${img.caption}" style="${styleAttr}" />\n`;
        columnHtml += imgElement;
        
        processedUrls.add(img.url);
      });
      
      columnHtml += `</div>\n`;
    });
    
    columnHtml += `</div>\n`;
    
    // 첫 번째 컬럼 이미지를 컬럼 그룹으로 교체하고 나머지는 제거
    const firstColumnFirstImage = group.columns[0]?.[0];
    if (firstColumnFirstImage) {
      const regex = new RegExp(`!\\[.*?\\]\\(${escapeRegExp(firstColumnFirstImage.url)}\\)`, 'g');
      md = md.replace(regex, columnHtml);
      
      // 나머지 컬럼 이미지들 제거
      group.columns.forEach((columnImages, columnIndex) => {
        columnImages.forEach((img, imgIndex) => {
          if (columnIndex === 0 && imgIndex === 0) return; // 첫 번째는 이미 교체됨
          const regex = new RegExp(`!\\[.*?\\]\\(${escapeRegExp(img.url)}\\)`, 'g');
          md = md.replace(regex, '');
        });
      });
    }
  });
  
  // 일반 이미지 처리
  md = md.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    function (match, p1, p2, p3) {
      if (processedUrls.has(p2)) {
        return ''; // 이미 처리된 이미지는 제거
      }
      
      const dirname = path.join("assets/img", ftitle);
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
      }
      const filename = path.join(dirname, `${index}.png`);

      downloadImage(p2, filename);

      // 이미지 크기 정보 확인
      const sizeInfo = imageInfo.get(p2);
      let imageTag = `![${index++}](/${filename})`;
      
      // 크기 정보가 있으면 HTML img 태그로 변환
      if (sizeInfo && (sizeInfo.width || sizeInfo.height)) {
        let styleAttr = '';
        if (sizeInfo.width) {
          const width = typeof sizeInfo.width === 'number' ? 
            `${sizeInfo.width}px` : 
            sizeInfo.width;
          styleAttr += `width: ${width}; `;
        }
        if (sizeInfo.height) {
          const height = typeof sizeInfo.height === 'number' ? 
            `${sizeInfo.height}px` : 
            sizeInfo.height;
          styleAttr += `height: ${height}; `;
        }
        
        styleAttr += 'max-width: 100%; height: auto;';
        
        const altText = p1 || sizeInfo.caption || `Image ${index - 1}`;
        imageTag = `<img src="/${filename}" alt="${altText}" style="${styleAttr}" />`;
      }
      
      return imageTag;
    }
  );
  
  return md;
}

// 이미지 다운로드 함수
function downloadImage(url, filename) {
  axios({
    method: "get",
    url: url,
    responseType: "stream",
  })
    .then(function (response) {
      let file = fs.createWriteStream(`${filename}`);
      response.data.pipe(file);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 정규식 특수문자 이스케이프 함수
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  // ensure directory exists
  const root = "_posts";
  fs.mkdirSync(root, { recursive: true });

  const databaseId = process.env.DATABASE_ID;
  let response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "공개",
      checkbox: {
        equals: true,
      },
    },
  });

  const pages = response.results;
  while (response.has_more) {
    const nextCursor = response.next_cursor;
    response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: nextCursor,
      filter: {
        property: "공개",
        checkbox: {
          equals: true,
        },
      },
    });
    pages.push(...response.results);
  }

  for (const r of pages) {
    const id = r.id;
    
    // 이미지 레이아웃 정보 미리 가져오기
    const { imageInfo, columnGroups } = await getImageLayoutInfo(id);
    
    // date
    let date = moment(r.created_time).format("YYYY-MM-DD");
    let pdate = r.properties?.["날짜"]?.["date"]?.["start"];
    if (pdate) {
      date = moment(pdate).format("YYYY-MM-DD");
    }
    // title
    let title = id;
    let ptitle = r.properties?.["게시물"]?.["title"];
    if (ptitle?.length > 0) {
      title = ptitle[0]?.["plain_text"];
    }
    // tags
    let tags = [];
    let ptags = r.properties?.["태그"]?.["multi_select"];
    for (const t of ptags) {
      const n = t?.["name"];
      if (n) {
        tags.push(n);
      }
    }
    // categories
    let cats = [];
    let pcats = r.properties?.["카테고리"]?.["multi_select"];
    for (const t of pcats) {
      const n = t?.["name"];
      if (n) {
        cats.push(n);
      }
    }

    // frontmatter
    let fmtags = "";
    let fmcats = "";
    if (tags.length > 0) {
      fmtags += "\ntags: [";
      for (const t of tags) {
        fmtags += t + ", ";
      }
      fmtags += "]";
    }
    if (cats.length > 0) {
      fmcats += "\ncategories: [";
      for (const t of cats) {
        fmcats += t + ", ";
      }
      fmcats += "]";
    }
    const fm = `---
layout: post
date: ${date}
title: "${title}"${fmtags}${fmcats}
---

`;
    const mdblocks = await n2m.pageToMarkdown(id);
    let md = n2m.toMarkdownString(mdblocks)["parent"];
          
    if (md === "") {
      continue;
    }
    
    const ftitle = `${date}-${title.replaceAll(" ", "-")}.md`;
    
    // 마크다운 처리 순서
    md = escapeCodeBlock(md);
    md = replaceTitleOutsideRawBlocks(md);
    md = convertYoutubeMarkdown(md);
    md = processImageMarkdown(md, imageInfo, columnGroups, ftitle);

    //writing to file
    fs.writeFile(path.join(root, ftitle), fm + md, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
})();
