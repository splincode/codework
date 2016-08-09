<?php

  require 'WordCounter/WordCounter.php';

  use Vendor\File as Word;  

  $dump = new Word\Counter("text.txt"); // text.txt || text2.txt

  $arr = $dump->arrayWord(); // получаем отсортированный массив
  
  foreach ($arr as $key => $value) {
    echo "$value <br>\n";
  }