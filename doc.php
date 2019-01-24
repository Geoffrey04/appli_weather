<?php


// initialisation de la session
$ch = curl_init();
$test = $_GET['city'];

// configuration des options
curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=".$test."&units=metric&APPID=7b70fb1d4c0750abe8e9308de631ba08");
curl_setopt($ch, CURLOPT_HEADER, 0);

// exécution de la session
curl_exec($ch);

// fermeture des ressources
curl_close($ch);













