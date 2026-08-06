const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require("moment");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

function convertYoutubeMarkdown(body) {
    const regex = /\[video\]\((https:\/\/youtu\.be\/([\w-]+))\)/g;
    return body.replace(regex, (_, url, id) => `{% include embed/youtube.html id='${id}' %}`);
}

function escapeCodeBlock(body) {
    const regex = /```([\s\S]*?)```/g;

    return body.replace(regex, (match, inner) => {
        // Liquid 패턴이 있을 때만 raw 적용
        const hasLiquid = /({{[\s\S]*?}}|{%-?[\s\S]*?-?%})/.test(inner);

        if (!hasLiquid) return match; // raw 없이 그대로

        return `\n{% raw %}\n\`\`\`${inner.trim()}\n\`\`\`\n{% endraw %}\n`;
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

    console.log(`총 ${pages.length}개 페이지 처리 시작`);

    let successCount = 0;
    let failCount = 0;

    for (const r of pages) {
        let title = r.id; // try/catch 밖에서도 참조 가능하도록 미리 선언
        try {
            const id = r.id;
            // date
            let date = moment(r.created_time).format("YYYY-MM-DD");
            let pdate = r.properties?.["날짜"]?.["date"]?.["start"];
            if (pdate) {
                date = moment(pdate).format("YYYY-MM-DD");
            }
            // title
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

            console.log(`[${title}] md length: ${md.length}`);

            if (md === "") {
                console.log(`[${title}] md가 비어있어 건너뜀`);
                continue;
            }
            md = escapeCodeBlock(md);
            md = replaceTitleOutsideRawBlocks(md);
            md = convertYoutubeMarkdown(md);

            console.log(`[${title}] md length (변환 후): ${md.length}`);

            const ftitle = `${date}-${title.replaceAll(" ", "-")}.md`;

            let index = 0;
            const imageDownloads = [];

            let edited_md = md.replace(
                /!\[(.*?)\]\((.*?)\)/g,
                function (match, p1, p2, p3) {
                    const dirname = path.join("assets/img", ftitle);
                    if (!fs.existsSync(dirname)) {
                        fs.mkdirSync(dirname, { recursive: true });
                    }
                    const filename = path.join(dirname, `${index}.png`);

                    imageDownloads.push(
                        axios({
                            method: "get",
                            url: p2,
                            responseType: "stream",
                        })
                            .then((response) => {
                                return new Promise((resolve, reject) => {
                                    const file = fs.createWriteStream(filename);
                                    response.data.pipe(file);
                                    file.on("finish", resolve);
                                    file.on("error", reject);
                                });
                            })
                            .catch((error) => {
                                console.log(`[${title}] 이미지 다운로드 실패 (${p2}):`, error.message);
                            })
                    );

                    let res;
                    if (p1 === "") res = "";
                    else res = `_${p1}_`;

                    //첨부파일명 url인코딩뺌.
                    //return `![${index++}](/${filename})${decodeURIComponent(res)}`;
                    //첨부파일명 노출뺌.
                    return `![${index++}](/${filename})`;
                }
            );

            console.log(`[${title}] edited_md length: ${edited_md.length}`);

            // 모든 이미지 다운로드가 끝날 때까지 대기
            if (imageDownloads.length > 0) {
                await Promise.all(imageDownloads);
                console.log(`[${title}] 이미지 ${imageDownloads.length}개 다운로드 완료`);
            }

            //writing to file
            const outPath = path.join(root, ftitle);
            await fs.promises.writeFile(outPath, fm + edited_md);
            console.log(`[${title}] 저장 완료: ${outPath} (${(fm + edited_md).length} bytes)`);
            successCount++;
        } catch (err) {
            failCount++;
            console.log(`[${title}] 처리 중 에러 발생 (id: ${r.id}):`, err);
        }
    }

    console.log(`처리 완료 — 성공: ${successCount}, 실패: ${failCount}`);
})();
