package ru.splincode.numeralsystem;
import java.util.Scanner;
import java.util.InputMismatchException;

class Util {

 static class Convert {

  public static String digits = "0123456789ABCDEF";

  public static String convertDecToBaseNumber(int decimacal, int scaleBase) {

   if (decimacal <= 0) return "0";

   int base = scaleBase;
   String result = "";

   while (decimacal > 0) {
    int digit = decimacal % base;
    result = Convert.digits.charAt(digit) + result;
    decimacal = decimacal / base;
   }

   return result;
  }
 }

 static class Dec {

  public static int getNumberFromLine() {

   Scanner scan = new Scanner(System.in);
   int decimacal = 0;

   System.out.print("Enter decimacal number (integer): ");

   try {
    decimacal = scan.nextInt();
   } catch (InputMismatchException e) {
    System.out.println("Input has to be a integer decimacal number...");
    System.exit(0);
   }

   return decimacal;

  }

  public static String toBinary(int decimacal) {
   return Util.Convert.convertDecToBaseNumber(decimacal, 2);
  }

  public static String toHex(int decimacal) {
   return Util.Convert.convertDecToBaseNumber(decimacal, 16);
  }

 }

}