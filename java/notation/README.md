## Задание

Создайте приложение, которое осуществит перевод чисел из десятичной системы счисления в двоичную и шестнадцатеричную.

### Compile class

```bash
$ javac NumeralSystem/Main.java
```

Будет сгенерирован Main.class в директории NumeralSystem.

### Run class

```bash
$ java -cp . NumeralSystem.Main
```

Output:

```
Enter decimacal number (integer): 1024
==================
Dec: 1024
Hex: 400
Bin: 10000000000
```

### Create and run a JAR file

```bash
$ jar cfme Main.jar Manifest.txt NumeralSystem.Main NumeralSystem/Main.class
$ java -jar Main.jar
```