<?php
# 抓網址開頭 如果有特殊設定  把 $case_code="該帶碼"
$src =$_SERVER['SERVER_NAME']; 
$case_code = substr($src,0,strpos($src,'.'));
$pdo = new pdo('mysql:host=localhost;dbname=htw_web', 'htw', '748aSgl5Ni');
$pdo->exec("SET NAMES 'utf8'");
$sql = "SELECT title,description,keyword FROM susers WHERE email = '" . $case_code . "'";
$dataList = $pdo->query($sql)->fetchAll();
$docTitle = $dataList[0]['title'];
$siteName = $dataList[0]['title'];
$docDesc = $dataList[0]['description'];
$keyWords = $dataList[0]['keyword'];
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
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">