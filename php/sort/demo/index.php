<?php

  require 'vendor/WordCounter.php';

  $cnt = new Vendor\WordCounter();

  $arr = $cnt
             ->readFile("text1.txt") // text1.txt || text2.txt
             ->arrayWord(); // получаем отсортированный массив

  foreach ($arr as $key => $value) {
    echo "$value <br>\n";
  }