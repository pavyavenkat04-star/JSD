import java.util.Scanner;

public class MultiplicationTable{
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter number:");
        int num=scan.nextInt();
        int sum=5;
        scan.close();
        System.out.println("Multiplication table of 5");
        for (int i=1;i<=num;i++)
        {System.out.println(i+ "*5=" +sum);
            sum=sum+5;
        }
    }
}
