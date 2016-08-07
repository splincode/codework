<?php

class WordCounter {

  /*
  ****************************
  PRIVATE
  ****************************
  */

  private $originFileString;
  private $words = [];

  private function file_get_contents_utf8($fn){ 
   $content = file_get_contents($fn); 
    return mb_convert_encoding($content, 'UTF-8', 
        mb_detect_encoding($content, 'UTF-8, ISO-8859-1', true)); 
  }

  private function sort_reverse(){
    
    $arr = $this->words;
    $temp = [];

    $i = count($arr);
    while ($i > 0) {

     $max = -INF;

     foreach ($arr as $key => $value) {
       if ($max[0] < $value) 
         $max = [ $value, $key ];
     }

     $temp[$max[1]] = $max[0];
     
     unset($arr[$max[1]]);
     $i = count($arr);

    }

    $this->words = $temp;
    
    unset($temp, $arr);

  }
  


  /*
  ****************************
  PUBLIC
  ****************************
  */

  function __construct($text) {
    $this->originFileString = $this->file_get_contents_utf8($text);
  }

  function print_file(){
    echo $this->originFileString;
  }

  function array_word(){

    $text = mb_strtolower($this->originFileString);
    preg_match_all("#(?<=\b)([a-zа-я]+)(?:\b)#siu", $text, $matches);
    $matches = $matches[0];

    foreach ($matches as $key => $value) {
      
      if (isset($this->words[$value])) {
        $this->words[$value]++;
      } else {
        $this->words += [$value=>1];
      }

    }


     // сортировка по алфавиту
     ksort($this->words);

     // сортировка по значению 
     // без затрагивания длинны ключей
     $this->sort_reverse();

     return $this->words;
  }





};



$dump = new WordCounter("text2.txt");

$arr = $dump->array_word();

foreach ($arr as $key => $value) {
  echo "$key $value \n<br>";
}