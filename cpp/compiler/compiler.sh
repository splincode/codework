#!/bin/bash

a=`pwd`
echo "Текущая директория: $a"
read -p "Напишите название файла, который хотите скомпилировать: " FILE
cat "$FILE"
cp "$FILE" /home/splincode/Develop/codework/cpp/compiler/main.psx
cd /home/splincode/Develop/codework/cpp/compiler/bin && make
cp compiler "$a"
cd "$a"