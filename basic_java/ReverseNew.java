import java.util.Scanner;

public class ReverseNew {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a name:");
        String name=scan.next();
        int len=name.length();
        scan.close();
        int j=1;
        for(int i=0;i<len/2;i++)
        {System.out.print(name.charAt(i));
            System.out.print(name.charAt(len-j));
            j++;
        }if (len%2!=0)
            System.out.println(name.charAt(len/2));
    }
}
