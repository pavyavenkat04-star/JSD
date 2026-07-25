import java.util.Scanner;

public class ForLoop1 {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a number:");
        int n=scan.nextInt();
        scan.close();
        for (int i=1;i<=n;i++)
        {if (i==n)
            System.out.println(i);

        else
        {System.out.print(i +"+");
}
}
    }
}
