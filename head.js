const fs = require('fs');
const minify = require('html-minifier').minify;

let script = "<?php include('head.php'); ?>"

console.log('圖片壓縮完成 (tailwind.config.js 可調整壓縮設定)');

fs.readFile(__dirname + '/dist/index.html', 'utf8', function (err, html) {

    let result = minify(html, {
        removeAttributeQuotes: true,
        collapseWhitespace: true
    });

    result = result.replace("</head>", `${script}</head>`)
    fs.writeFileSync(__dirname + '/dist/index.html', result);
    console.log('------');
    console.log('head.php 已寫入 index.html');
    console.log('------');
    console.log('編譯完成');
})