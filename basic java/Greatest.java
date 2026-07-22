import java.util.Scanner;

public class Greatest {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter number 1:");
        short a=scan.nextShort();
        System.out.println("Enter number 2:");
        short b=scan.nextShort();
        if(a>b)
        {System.out.println(a+" is the greatest number.");

        }else
        {System.out.println(b+" is the greatest number.");
            
        }
    }
    
}
