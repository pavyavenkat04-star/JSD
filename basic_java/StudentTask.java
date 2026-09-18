import java.util.Scanner;
public class StudentTask {
    int rno;
    String sname;
    float mark;
    char gender;
    boolean ismarried;
    static int count=0;
    
    void collectdata()
    {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter the following  details:");
        System.out.print("Rno:");
        rno=scan.nextInt();
         System.out.print("Student name:");
         sname=scan.next();
          System.out.print("Mark:");
          mark=scan.nextFloat();
           System.out.print("Gender(m/f):");
           gender=scan.next().charAt(0);
            System.out.print("Is Married(true/false):");
            ismarried=scan.nextBoolean();
           
    }
    void femalecount()
    {   
            if(gender=='f')
             count++;
           
    }
   
    public static void main(String[] args)
     {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter total number of students: ");
        int size=scan.nextInt();
        StudentTask arr[]=new StudentTask[size];
       
        for (int i=0;i<size;i++)
        {
            arr[i]=new StudentTask();
            arr[i].collectdata();

        }
        System.out.println("Total number of students:"+size);
        
          for (int i=0;i<size;i++)
        {  
            arr[i].femalecount();

        }
         System.out.println("No of female students:"+count);
          System.out.println("Centum students list:");
         for(int i=0;i<size;i++)
         {if(arr[i].mark==100)
            System.out.println("R.no:"+arr[i].rno+" name:"+arr[i].sname+" mark:"+arr[i].mark+" gender:"+arr[i].gender+" is married:"+arr[i].ismarried);
         }
         System.out.println("Married students :");
         for(int i=0;i<size;i++)
         {
            if(arr[i].ismarried)
            {

                System.out.println(arr[i].rno+" "+arr[i].sname);
                 System.out.println();
            }
         }
       
 scan.close();
    }

}
