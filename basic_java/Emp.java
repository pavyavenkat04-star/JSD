public class Emp {
    Emp()
    {
        System.out.println("Constructor is called.This is default or null constructor.");

    }void show()
    {
        System.out.println("This is normal method");
    }
    public static void main(String[] args) {
        Emp e1=new Emp();//constructor
        e1.show();//normal method
    }
    
}
