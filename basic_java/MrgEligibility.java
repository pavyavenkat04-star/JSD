import java.util.Scanner;

public class MrgEligibility {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
    System.out.println("Enter gender(male/female):");
    String gender=scan.nextLine();
    System.out.println("Enter age:");
    int age=scan.nextInt();
    scan.close();
    if (gender.equals("male"))
    {if(age>=21)
    {System.out.println("Eligible");
    }else
        {System.out.println("Not eligible");
        }
    }
    if (gender.equals("female"))
    {if (age>=18)
    {System.out.println("Eligible");
    }else
        {System.out.println("Not eligible");}
    }}}