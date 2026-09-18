import java.util.Scanner;
public class Stud2
{
    int rno;
    String sname;
    float mark;
    Scanner scan=new Scanner(System.in);

    void getdata()
    {
        System.out.println("Enter rno,sname and mark:");
         rno=scan.nextInt();
        sname=scan.next();
         mark=scan.nextFloat();
    } 

    void dis()
    {System.out.println("Student roll no:"+rno+" name:"+sname+" mark:"+mark);
    } 

    public static void main(String[] args)
    {
    Scanner scan =new Scanner(System.in);
    System.out.print("Enter total no of students:");
    int n=scan.nextInt();
    Stud2 s[]=new Stud2[n];
    for (int i=0;i<n;i++)
    {
        s[i]=new Stud2();
        s[i].getdata();
    }for (int i=0;i<n;i++)
    {
        s[i].dis();
    }
    System.out.println("--------Failed students list------");
    for (int i=0;i<n;i++)
{
    if (s[i].mark<50)
        s[i].dis();
}
     System.out.println("--------Passed students list------");
    for (int i=0;i<n;i++)
      {
    if (s[i].mark>=50)
        s[i].dis();
       }}
}
