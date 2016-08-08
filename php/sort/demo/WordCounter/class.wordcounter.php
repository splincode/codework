<?php
  
  require 'interface.wordcounter.php';

  /**
   * Есть файл с текстом. Текст может содержать любые символы. Нужно выбрать из него все уникальные слова,
   * посчитать для каждого слова количество вхождений (сколько раз встречается в тексте), потом отсортировать
   * все слова по количеству вхождений, алфавиту и длине слова (от меньшего к большему) и сохранить результат
   * в файл в виде списка слово-вхождение.
   *
   * Пояснение по сортировке: если у первого слова больше вхождений, чем у второго, то первое в списке будет выше. 
   * Если у них поровну вхождений, то выше будет то, которое идет первым по алфавиту. Если слова начинаются
   * одинаково ("бык" и "быки"), то первым идет то, которое короче. Словом считается последовательность из букв 
   * русского (а-б) или латинского (a-z) алфавитов. Регистр не имеет значения.
   *
   */

  class WordCounter implements iWordCounter {

    /*
    ****************************
    PRIVATE
    ****************************
    */


    private $originFileString;
    private $words = [];

    /**
     * Получение содержимого файла
     *
     * @param строка $fn (путь к файлу)
     * @return string
     */

    private function fileGetContentsUtf8($fn){ 
     $content = file_get_contents($fn); 
      return mb_convert_encoding($content, 'UTF-8', 
          mb_detect_encoding($content, 'UTF-8, ISO-8859-1', true)); 
    }

    /**
     * Сортировка по значению, в сторону убывания, 
     * без учета алфавита ключей
     *
     * @return null
     */

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

    /**
     * Инициализация объекта
     *
     * @param строка $text (путь к файлу)
     * @return null
     */

    function __construct($text) {
      $this->originFileString = $this->fileGetContentsUtf8($text);
    }

    /**
     * Вывод файла на экран (оригинал)
     *
     * @return null
     */

    function print_file(){
      echo $this->originFileString;
    }

    /**
     * Возвращаем отсортированны массив слов по количеству вхождений
     *
     * @return array('word':string => 'count':int)
     */

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
