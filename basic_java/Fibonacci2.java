import java.util.Scanner;

public class Fibonacci2 {
    public static void main(String[] args) {
    Scanner scan=new Scanner (System.in);
    System.out.println("Enter number:");
    int num=scan.nextInt();
    scan.close();
    int f1=-1;
    int f2=1;
    int f3;
    for(int i=1;i<=num;i++)
    {f3=f1+f2;
        System.out.print(f3+" ");
        f1=f2;
        f2=f3;
    }
    }
}
