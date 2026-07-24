import java.util.Scanner;

public class SwitchDemo3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter 2 numbers:");
        int a=scan.nextInt();
        int b=scan.nextInt();
        System.out.println("a.Additon s.Subtraction m.Multiplication d.Division r.Rem \nEnter choice");
        char ch=scan.next().charAt(0);
        scan.close();
        switch(ch)
        {
        case 'A':case 'a':
            System.out.println("Addition:"+(a+b));
            break;
        case 's':case 'S':
            System.out.println("Subtraction:"+(a-b));
            break;
        case 'M':case'm':
            System.out.println("Multiplication:"+(a*b));
            break;
        case 'D': case 'd':
            System.out.println("Division:"+(a/b));
            break;
        case 'R': case 'r':
            System.out.println("Remainder:"+(a%b));
            break;
        default:
            System.out.println("Enter valid choice:");
        }
    }
    }


