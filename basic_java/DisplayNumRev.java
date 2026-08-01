import java.util.Scanner;

public class DisplayNumRev {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter any num:");//1234
        long num=scan.nextLong();
        long rem=0;
        long rev=0;
        scan.close();
        while(num!=0) //1234    123     12      1
        {
        rem=num%10; //4         3       2       1
        rev=rev*10+rem; //r=0+4     40+3    430+2   4320+1
        num=num/10;//123        12      1       0
        }
        System.out.print("Reverse no:"+rev);
    }
    
}
