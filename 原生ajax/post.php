<?php
header('content-type: text/html;charset="utf-8"');
error_reporting(0);

$username = $_post['username'];
$age = $_post['age'];

echo "名字: {$username}, 年龄: {$age}";