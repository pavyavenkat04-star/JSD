import java.util.Scanner;

public class Calendar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter year:");
        int year=scan.nextInt();
        System.out.println("Enter month(in no):");
        short month=scan.nextShort();
        scan.close();
        switch(month)
        {case 1:case 3:case 5:case 7:case 8:case 10:case 12:
            System.out.println("No of days:31");
            break;
        case 4:case 6:case 9:case 11:
            System.out.println("No of days:30");
        case 2:
            if (year%2==0 && year%100!=0)
                {
                    System.out.println("No of days:29");
                }else
                {
                    System.out.println("No of days:28");
                }
                break;
        default:
            System.out.println("Enter valid month");
    }
}
}