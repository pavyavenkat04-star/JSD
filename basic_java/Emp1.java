public class Emp1 {
    int eno1;
    String ename;
    float esal;
    Emp1(int eno,String ename,float esal)
    {
        System.out.println("This is argument or parameterized constructor.");
        eno1=eno;
        this.ename=ename;
        this.esal=esal;

    }void show()
    {
        System.out.println("This is normal method");
        System.out.println(eno1+" "+ename+" "+esal);
    }
    public static void main(String[] args) {
        Emp1 e1=new Emp1(1001,"iniya",17668.f);//constructor
        Emp1 e2=new Emp1(1002,"harini",93781.87f);
        e1.show();//normal method
        e2.show();
        e1=e2;//copy
        e1.show();
        e2.show();
    }
    
}
