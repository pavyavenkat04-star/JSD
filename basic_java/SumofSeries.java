import java.util.Scanner;

public class SumofSeries {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("enter a no:");
        int num=scan.nextInt();
        scan.close();
        int sum=0;
        for (int i=1;i<=num;i++)
        {if (i%2==1)
        {sum=sum+i;
        System.out.print(i+"-");
        }
        else
        {sum=sum-i;
        System.out.print(i+"+");
        }
        }
System.out.println("\b="+sum);
    }
    
}
