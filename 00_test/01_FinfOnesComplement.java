import java.io.*;
import java.util.Scanner;

class GFG {
	public static void main (String[] args) {
    Scanner scanner = new Scanner(System.in);
		int decNum = Integer.parseInt(scanner.nextLine().trim());
		System.out.println("The one's complement of " + decNum + " is:");
		
		String binaryRep = "";
		while (decNum > 0)
		{
		    int a = decNum % 2;
		    binaryRep += a;
		    decNum /= 2;
		}
		// System.out.println(binaryRep);
		char[] binCharsArray = new char[binaryRep.length()];
		for (int i = 0; i < binaryRep.length(); i++) {
      char currChar = binaryRep.charAt(i);
      // System.out.println(currChar);
      binCharsArray[i] = (binaryRep.charAt(i) == '0') ? '1' : '0';
		}
		int result = Integer.parseInt(String.valueOf(binCharsArray), 2);
		System.out.println(result);
	}
}


// String binaryRep = "";
//         while (n > 0)
//         {
//             int a = n % 2;
//             binaryRep += a;
//             n /= 2;
//         }
//         // System.out.println(binaryRep);
//         char[] binCharsArray = new char[binaryRep.length()];
//         for (int i = 0; i < binaryRep.length(); i++) {
//           char currChar = binaryRep.charAt(i);
//           // System.out.println(currChar);
//           binCharsArray[i] = (binaryRep.charAt(i) == '0') ? '1' : '0';
//         }
//         int result = Integer.parseInt(String.valueOf(binCharsArray), 2);
//         return result;