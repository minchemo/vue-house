<?php
$data = [
    'src' => 'https://softpark.tw/',
    'title' => '巨城散步圈 您的溫適花園｜2-3房｜官網',
    'description' => '住在新竹核心，享受巨城便利，新的舒活城識正崛起，由昌益品牌輕盈打造，一場專屬的溫適花園，Soft Living專為您而來 03-5717088',
    'keyword' => '新竹巨城,昌益,新竹買房,新竹車站建案,三民國中學區房'
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

