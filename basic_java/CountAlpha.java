import java.util.Scanner;

public class CountAlpha {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a text:");
        String text=scan.nextLine();
        scan.close();
        int len=text.length();
        int alphabets=0;
        int numbers=0;
        int spl_char=0;
        for (int i=0;i<len;i++)
        {if (text.charAt(i)>='0' && text.charAt(i)<='9')
            numbers++;
        else if(text.charAt(i)>='a' && text.charAt(i)<='z')
            alphabets++;
        else if (text.charAt(i)=='.'||text.charAt(i)=='#'||text.charAt(i)=='$'||text.charAt(i)=='%'||text.charAt(i)=='^'||text.charAt(i)=='&'||text.charAt(i)=='*'||text.charAt(i)=='('||text.charAt(i)==')')
            spl_char++;
        else if (text.charAt(i)=='@')
            break;

        }System.out.println("Alphabets:"+alphabets);
        System.out.println("Numbers:"+numbers);
        System.out.println("Special characters:"+spl_char);
    }
}
