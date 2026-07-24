import java.util.Scanner;

public class SwitchDemo2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter 2 numbers:");
        int a=scan.nextInt();
        int b=scan.nextInt();
        System.out.println("Add Sub Mul Div Rem \nEnter choice");
        String ch=scan.next();
        scan.close();
        switch(ch)
        {
        case "Add":
            System.out.println("Addition:"+(a+b));
            break;
        case "Sub":
            System.out.println("Subtraction:"+(a-b));
            break;
        case "Mul":
            System.out.println("Multiplication:"+(a*b));
            break;
        case "Div":
            System.out.println("Division:"+(a/b));
            break;
        case "Rem":
            System.out.println("Remainder:"+(a%b));
            break;
        default:
            System.out.println("Enter valid choice:");
        }
    }
    }
