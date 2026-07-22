import java.util.Scanner;
public class Control {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a no:");
        short num=scan.nextShort();
        if (num%2==0)
        {System.out.println("Given number is even.");

        }
        else{
            System.out.println("Given number is odd.");
        }
scan.close();
    }
}
