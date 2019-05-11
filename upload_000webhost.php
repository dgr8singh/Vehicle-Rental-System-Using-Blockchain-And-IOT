<?php
require __DIR__.'/vendor/autoload.php';
$deviceId = $_GET["deviceid"];
$latitude = $_GET["lat"];
$longitude= $_GET["lon"];

 

const DEFAULT_URL = 'https://major-3898b.firebaseio.com';
const DEFAULT_TOKEN = 'EaWcgNC20hU2NLUuQ58oSvuYkeCgAmQXfFA9GmNH';
$DEFAULT_PATH = '/Accounts/username/devices/'.$deviceId;

date_default_timezone_set('Asia/Kolkata');

$_devicestatus= array(
'latitude' => $latitude + 0.0,
'longitude' => $longitude + 0.0,
'battery' => '100',
'lastUpdated' => date('Y-m-d H:i:s')
);

 

$firebase = new \Firebase\FirebaseLib(DEFAULT_URL, DEFAULT_TOKEN);
$firebase->update($DEFAULT_PATH, $_devicestatus); // updates data in Firebase

print("POST SUCCESSFUL");
?>
