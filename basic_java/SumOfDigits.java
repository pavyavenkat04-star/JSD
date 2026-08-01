import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a num:");//1234
        long n=scan.nextLong();
        scan.close();
        long r,s=0;
        while (n!=0)
        {r=n%10;//4     3       2       1
        n=n/10;//123    12      1       0       
        s=s+r;//0+4     4+3     4+3+2    4+3+2+1
        }
System.out.println("Sum of the digits:"+s);
    }
}
