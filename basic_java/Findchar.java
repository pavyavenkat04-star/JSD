import java.util.Scanner;

public class Findchar {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter name:");
        String name=scan.next();
        int len=name.length();
        System.out.println("Enter character to be found:");
        char ch=scan.next().charAt(0);
        int count=0;
        for (int i=0;i<=(len-1);i++)
        {
            if (name.charAt(i)==ch)
               { System.out.println("Element found at index "+i);
                count++;
}
        }if (count==0)
            System.out.println("Element not found");
scan.close();
    }
}
