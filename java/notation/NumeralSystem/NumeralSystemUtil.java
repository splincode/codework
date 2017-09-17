package NumeralSystem;

import java.util.Scanner;
import java.util.InputMismatchException;

class NumeralSystemUtil {

	static class Convert {
		public static String convertDecToBaseNumber(int decimacal, int scaleBase) {
    		String digits = "0123456789ABCDEF";
		    if (decimacal <= 0) return "0";

		    int base = scaleBase;
		    String result = "";

		    while (decimacal > 0) {
		        int digit = decimacal % base;             
		        result = digits.charAt(digit) + result; 
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
        	return NumeralSystemUtil.Convert.convertDecToBaseNumber(decimacal, 2);
        }

        public static String toHex(int decimacal) {
        	return NumeralSystemUtil.Convert.convertDecToBaseNumber(decimacal, 16);
        }

    }

}