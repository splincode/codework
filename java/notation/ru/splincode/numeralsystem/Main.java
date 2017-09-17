package ru.splincode.numeralsystem;

public class Main {
 public static void main(String[] args) {

  int decimalValue = Util.Dec.getNumberFromLine();
  String hexdecimalValue = Util.Dec.toHex(decimalValue);
  String binaryValue = Util.Dec.toBinary(decimalValue);

  System.out.println("==================");
  System.out.println("Dec: " + decimalValue);
  System.out.println("Hex: " + hexdecimalValue);
  System.out.println("Bin: " + binaryValue);

 }
}