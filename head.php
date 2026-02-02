<?php
$data = [
    'src' => 'https://fengxiudajing.tw/',
    'title' => '豐秀大境 | 新店4字頭3房景觀宅，捷運6分鐘',
    'description' => '新店秀水段千坪造鎮，27–36坪正三房，坐擁樹海新視野。新店捷運站6分鐘，20分鐘直達信義區，用北市1/3價住進新店最美風景，麗寶集團 接待中心：新北市新店區北宜路一段60號，電話：02-2915-9797',
    'keyword' => '豐秀大境, 新店建案, 新店首購, 新店建案推薦, 新店景觀宅'
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

