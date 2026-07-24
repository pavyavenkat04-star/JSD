
import java.util.Scanner;

public class SwitchDemo1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter 2 numbers:");
        int a=scan.nextInt();
        int b=scan.nextInt();
        System.out.println("a.addition s.subtraction m.multiplication d.division r.remainder \nEnter choice");
        char ch=scan.next().charAt(0);
        scan.close();
        switch(ch)
        {
        case 'a':
            System.out.println("Addition:"+(a+b));
            break;
        case 's':
            System.out.println("Subtraction:"+(a-b));
            break;
        case 'm':
            System.out.println("Multiplication:"+(a*b));
            break;
        case 'd':
            System.out.println("Division:"+(a/b));
            break;
        case 'r':
            System.out.println("Remainder:"+(a%b));
            break;
        default:
            System.out.println("Enter valid choice:");
        }
    }
    }


