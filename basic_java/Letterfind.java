import java.util.Scanner;
public class Letterfind {
    
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a string:");
        String word=scan.nextLine();
        System.out.println("Enter letter to find:");
        char let=scan.next().charAt(0);
        String found="";
        int count=0;
        int len=word.length();
        for (int i=0;i<len;i++)
        {
            if(word.charAt(i)==let)
            {
                found=found+i+",";  
                count++;
            }
        }System.out.println(found+"\b ");
        if (count==0)
            System.out.println("Letter "+let+" not found");
    }
}
