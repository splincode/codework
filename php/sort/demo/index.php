<?php

  require 'vendor/WordCounter.php'; 

  $cnt = new Vendor\WordCounter(); // text.txt || text2.txt
  $arr = $cnt->readFile("text.txt")->arrayWord(); // получаем отсортированный массив

  foreach ($arr as $key => $value) {
    echo "$value <br>\n";
  }