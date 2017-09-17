package NumeralSystem;

import NumeralSystem.NumeralSystemUtil;

public class Main {
    public static void main(String[] args) {

        int decimacal = NumeralSystemUtil.Dec.getNumberFromLine();
        String hexdecimal = NumeralSystemUtil.Dec.toHex(decimacal);
        String binary = NumeralSystemUtil.Dec.toBinary(decimacal);

        System.out.println("==================");
        System.out.println("Dec: " + decimacal);
        System.out.println("Hex: " + hexdecimal);
        System.out.println("Bin: " + binary);

    }
}