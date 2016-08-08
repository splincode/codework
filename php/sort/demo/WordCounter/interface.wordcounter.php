<?php

interface iWordCounter {

  /**
   * Инициализация объекта
   *
   * @param строка $text (путь к файлу)
   * @return null
   */

  public function __construct($text);

  /**
   * Вывод файла на экран (оригинал)
   *
   * @return null
   */

  public function print_file();

  /**
   * Возвращаем отсортированны массив слов по количеству вхождений
   *
   * @return array('word':string => 'count':int)
   */

  public function array_word();

}