## Задание

Создайте приложение, которое осуществит перевод чисел из десятичной системы счисления в двоичную и шестнадцатеричную.

### Compile class

```bash
$ javac ScaleOfNotation/Main.java
```

Будет сгенерирован Main.class в директории ScaleOfNotation.

### Run class

```bash
$ java -cp . ScaleOfNotation.Main
```

### Create and run a JAR file

```bash
$ jar cfme Main.jar Manifest.txt ScaleOfNotation.Main ScaleOfNotation/Main.class
$ java -jar Main.jar
```