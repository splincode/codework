package ru.splincode.numeralsystem;
import java.util.Scanner;
import java.util.InputMismatchException;

class Util {

 static class Convert {

  public static String digits = "0123456789ABCDEF";

  public static String convertDecToBaseNumber(int decimal, int scaleBase) {

   if (decimal <= 0) return "0";

   int base = scaleBase;
   String result = "";

   while (decimal > 0) {
    int digit = decimal % base;
    result = Convert.digits.charAt(digit) + result;
    decimal = decimal / base;
   }

   return result;
  }
 }

 static class Dec {

  public static int getNumberFromLine() {

   Scanner scan = new Scanner(System.in);
   int decimal = 0;

   System.out.print("Enter decimal number (integer): ");

   try {
    decimal = scan.nextInt();
   } catch (InputMismatchException e) {
    System.out.println("Input has to be a integer decimal number...");
    System.exit(0);
   }

   return decimal;

  }

  public static String toBinary(int decimal) {
   return Util.Convert.convertDecToBaseNumber(decimal, 2);
  }

  public static String toHex(int decimal) {
   return Util.Convert.convertDecToBaseNumber(decimal, 16);
  }

 }

}