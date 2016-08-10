<?php

namespace Vendor;

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

class WordCounter {

  private $string;

  /**
   * Получение содержимого файла
   *
   * @param строка $fn (путь к файлу)
   * @return string
   */

  private function fileGetContentsUtf8($fn)
  { 
   
    $content = file_get_contents($fn); 
    return mb_convert_encoding(
      $content, 'UTF-8', 
      mb_detect_encoding($content, 'UTF-8, ISO-8859-1', true)
    ); 

  }

  /**
   * Вывод файла на экран (оригинал)
   *
   * @param строка $filePath (путь к файлу)
   * @return this
   */

  public function readFile($filePath)
  {

    $this->string = $this->fileGetContentsUtf8($filePath);
    return $this;

  }

  /**
   * Возвращаем отсортированны массив слов по количеству вхождений
   *
   * @return array()
   */

  public function arrayWord()
  {

    $string = $this->string;
    
    preg_match_all("/[a-zа-я]+/ium", $string, $words);

    $counts = array_count_values(array_map('mb_strtolower', $words[0]));
    $words = array_keys($counts);

    array_multisort($counts, SORT_NUMERIC, SORT_DESC, $words, SORT_STRING);
    return array_map(function($a, $b) {
      return "$a $b";
    }, $words, $counts);

  }

}