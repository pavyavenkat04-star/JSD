import java.util.Scanner;

public class RemoveContinousSpace{
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter any text:");
        String text=scan.nextLine();
        scan.close();
        String res="";
        int len=text.length();
        for(int i=0;i<len-1;i++)
        {
        char c1=text.charAt(i);
        char c2=text.charAt(i+1);
        if (c1==' ' && c2==' ')
        continue;
    else
        res=res+c1;
        }System.out.println(res+text.charAt(len-1));
    }
    }

