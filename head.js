const fs = require('fs');
const minify = require('html-minifier').minify;

const case_code = 'tr'; // 设置 case_code 的值

// 新的 PHP 代码
let phpCode = `<?php
$case_code = "${case_code}";
?>`;

// 之前的 script 变量
let script = "<?php include('head.php'); ?>";

console.log('\x1b[33m%s\x1b[0m', '圖片壓縮完成 (vite.config.js 可調整壓縮設定)');


fs.readFile(__dirname + '/dist/index.html', 'utf8', function (err, html) {
    let result = minify(html, {
        removeAttributeQuotes: true,
        collapseWhitespace: true
    });


    // 同时插入之前的 script 和新的 PHP 代码
    result = result.replace("</head>", `${phpCode}\n${script}\n</head>`);

    fs.writeFileSync(__dirname + '/dist/index.html', result);
    console.log('\x1b[33m%s\x1b[0m', 'head.php 已寫入 index.html');
    console.log('');
    console.log('\x1b[36m%s\x1b[0m', '編譯完成');
});
