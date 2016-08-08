<?php

  require 'WordCounter/class.wordcounter.php';

  $dump = new WordCounter("text2.txt"); // text.txt || text2.txt

  $arr = $dump->array_word(); // получаем отсортированный массив
  
  foreach ($arr as $key => $value) {
    echo "$key $value <br>\n";
  }