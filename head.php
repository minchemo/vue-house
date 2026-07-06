<?php
$data = [
    'src' => 'https://rising-star.tw/',
    'title' => '華雄明日之星｜美麗島站雙捷運國際潮居｜官網',
    'description' => '前瞻高雄新站特區，美麗島站約250米，捷運一站中央公園、五福商圈，明星級地段X世界級未來，全平面車位，精品2-3房，即將閃亮登場',
    'keyword' => '華雄明日之星,華雄建設,美麗島站建案,高雄預售屋,高雄捷運宅'
];


$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
$shareUrl = $data['src'];
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<link rel="canonical" href="<?php echo $shareUrl; ?>">

<!-- Open Graph -->
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta property="og:url" content="<?php echo $shareUrl; ?>" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />

<!-- Schema.org -->
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">

