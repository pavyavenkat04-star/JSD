import java.util.Scanner;
public class Fibonacci {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a (+ve) num:");
        int num=scan.nextInt();
        scan.close();
        System.out.println("Fibonacci series");
       int a=0,b=1;
       int sum=0;
        if(num==1)
            System.out.println(a);
        else if(num==2 || num>2)
            System.out.print(a+" "+b);
        if (num>2)
        {for(int i=1;i<=(num-2);i++)
        {
        sum=a+b;
        a=b;
        b=sum;
        System.out.print(" "+sum);
        }
        } 
        }
}

