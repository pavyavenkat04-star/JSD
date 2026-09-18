package advancejava;
 
import java.util.Scanner;

class AgeException extends Exception{
    Scanner scan=new Scanner(System.in);
    AgeException()
    {
        System.out.println("enter age:");
        int age=scan.nextInt();
        if(age>=18)
        {
            System.out.println("Age is accepted");
        }
        else{
            try{
                throw new Exception("Age < 18 is not eligible to vote.");
            }
            catch(Exception e)
            {
                System.out.println(e.toString());
                //System.out.println(e);
            }
            new AgeException();
        }
    }
}
public class CustomException {
   public static void main(String[] args) {
    new AgeException();
   }
}
