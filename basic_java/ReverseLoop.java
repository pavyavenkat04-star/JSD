import java.util.Scanner;

public class ReverseLoop {
    public static void main(String[] args) {
        Scanner scan=new Scanner (System.in);
        System.out.println("enter name:");
        String name=scan.next();
        int len=name.length();
        for (int i=(len-1);i>=0;i--)
        {System.out.print(name.charAt(i)+" ");
        }scan.close();
    }
}
