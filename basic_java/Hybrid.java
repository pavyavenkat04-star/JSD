class Grandfather
{
    void dis()
    {
        System.out.println("grandfather class");
    }
}
class Appa extends Grandfather
{
    int cash=50000;
    void dis()
    {   super.dis();
        System.out.println("Appa class");
    }
}
class Son1 extends Appa{
    void dis()
    {
        super.dis();
        System.out.println("Son1 can access Father's cash:"+cash);
    }
}
class Son2 extends Appa{
    void dis()
    {
        super.dis();
        System.out.println("Son2 can access Father's cash:"+cash);
    }
}
public class Hybrid {
    public static void main(String[] args) {
    Son1 s1=new Son1();
    Son2 s2=new Son2();
    s1.dis();
    s2.dis();
}
}
