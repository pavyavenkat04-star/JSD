import java.util.Scanner;
class Customer
{public static void main(String []args)
{Scanner scan=new Scanner(System.in);
System.out.println("Enter your name:");
String cname=scan.next();
System.out.println("Enter customer id:");
short cid=scan.nextShort();
System.out.println("Enter amount:");
int amt=scan.nextInt();
System.out.println("Enter height:");
float hei=scan.nextFloat();
System.out.println("Is account valid y/n");
char av=scan.next().charAt(0);
System.out.println("Online payment (True/False)");
boolean mode=scan.nextBoolean();
System.out.println("Enter mobile no:");
long pn=scan.nextLong();
scan.close();
System.out.println("customer id:"+cid);
System.out.println("customer name:"+cname);

System.out.println("amount:"+amt);
System.out.println("height:"+hei);

System.out.println("Account valid:"+av);
System.out.println("online payment:"+mode);
System.out.println("phone number:"+pn);


}
}