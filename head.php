<?php
# 2025/6/25
#直接定義靜態資料
$data = [
    'src' => 'https://hantsai-lucky.tw/',
    'title' => '和彩吉翔｜竹科人高速移居新熱區｜官網 ',
    'description' => '和彩吉翔：世界級健康樂活城〔關西〕躍升圓夢新樂園，雙北名宅推手〔弘華機構〕跨界首獻，夢想啟程。',
    'keyword' => '和彩吉翔,弘華機構,關西建案,竹科建案,竹北建案'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<!--<meta property="og:image" content="<?php echo $src; ?>og.jpg" />-->
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">