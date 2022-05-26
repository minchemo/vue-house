<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");
$_POST = json_decode(file_get_contents('php://input'), true);

$url = 'https://notify-api.line.me/api/notify';
$data = array(
    'message' => "
姓名: " . $_POST["name"] . "
電話: " . $_POST["phone"] . "
Email: " . $_POST["email"] . "
聯絡時間: " . $_POST["contacttime"] . "
備註: " . $_POST["msg"] . "
房型: " . $_POST["room_type"] . "
居住城市: " . $_POST["city"] . "
居住地區: " . $_POST["area"] . "",
);

$token = 'uoVOguDbquuQyDfjNqxZhhKT1douIpsNSddap5rL8ne';

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'header'  => "Authorization: Bearer " . $token . "\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo $result;
