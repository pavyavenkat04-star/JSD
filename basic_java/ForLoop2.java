import java.util.Scanner;

public class ForLoop2 {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("enter a no:");
        int n=scan.nextInt();
        scan.close();
        int sum=0;
        for(int i=1;i<=n;i++)
        {if(i<n)
           { System.out.print(i+"+");
            sum=sum+i;
        }
        else
        { sum=sum+i;
            System.out.println(i+"="+sum);
           
        }

    }
    }
}
