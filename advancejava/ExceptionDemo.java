package advancejava;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        try{
            System.out.println("Enter 2 values:");
            int a=scan.nextInt();
            int b=scan.nextInt();
            int c=a%b;
            System.out.println("Remainder value:"+c);
            System.out.println("Enter array size:");
            int size=scan.nextInt();
            int arr[]=new int[size];
            System.out.println("Array size accepted.");
            int br[]={13,43,12};
            System.out.println("2nd index:"+br[5]);
            System.out.println("ok index");
        }
        catch(ArithmeticException e)
        {System.out.println("Arithmetic Exception");
        }
        catch(InputMismatchException e)
        {
            System.out.println("Dont type text.Only numbers are allowed");
        }
        catch(NegativeArraySizeException e)
        {
            System.out.println("Array size should be positive");
        }
        catch(ArrayIndexOutOfBoundsException e)
        {
            System.out.println("Array index out of range");
        }
        scan.close();
    }
    
}
