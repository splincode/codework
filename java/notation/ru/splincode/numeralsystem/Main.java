package ru.splincode.numeralsystem;

public class Main {
 public static void main(String[] args) {

  int decimacal = Util.Dec.getNumberFromLine();
  String hexdecimal = Util.Dec.toHex(decimacal);
  String binary = Util.Dec.toBinary(decimacal);

  System.out.println("==================");
  System.out.println("Dec: " + decimacal);
  System.out.println("Hex: " + hexdecimal);
  System.out.println("Bin: " + binary);

 }
}