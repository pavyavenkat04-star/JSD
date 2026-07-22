import java.util.Scanner;

public class Leapyr {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter year");
        int year=scan.nextInt();
        if(year%4==0)
        {System.out.println("Leap year");

        }else
        {System.out.println("Not a Leap year");
            
        }
    }
    
}
