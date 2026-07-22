import java.util.Scanner;

public class Grade {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
    System.out.println("Enter 5 marks:");
int m1=scan.nextInt();
int m2=scan.nextInt();
 int m3=scan.nextInt();
 int m4=scan.nextInt();
 int m5=scan.nextInt();
String res="";
if(m1>34 && m2>34 && m3>34 && m4>34 &&m5>34)
{res="Pass";

}else{
    res="Fail";                                                                                                                                                
}
int total=m1+m2+m3+m4+m5;
float avg=total/5.0f;
String gra="";
if (res=="Pass")
{if (avg>=85)
    gra="Outstanding";
    else if(avg>=75)
        gra="Excellent";
    else if(avg>=65)
        gra="good";
    else if(avg>=55)
        gra="fair";
    else
        gra="satisfactory";
}else{
    gra="No grade because fail";
}
System.out.println("Total marks:"+total);
System.out.println("Percentage:"+avg);
System.out.println("Result:"+res);
System.out.println("Grade:"+gra);
scan.close();
}
}

