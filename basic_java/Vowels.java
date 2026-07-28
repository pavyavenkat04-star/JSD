import java.util.Scanner;

public class Vowels {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a name:");
        String name=scan.nextLine();
        scan.close();
        int len=name.length();
        int count=0;
        for(int i=0;i<len;i++)
        {
            if (name.charAt(i)=='a' || name.charAt(i)=='e' ||name.charAt(i)=='i' ||name.charAt(i)=='o' || name.charAt(i)=='u')
                {System.out.println(" "+name.charAt(i));
                count++;}

        }System.out.println("("+count+")");
    }
}
