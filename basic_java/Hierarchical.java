class Appa
{
    int cash=50000;
}
class Son1 extends Appa{
    void dis()
    {
        System.out.println("Son 1 can access Appa's cash: "+cash);

    }
}
class Son2 extends Appa{
    void dis()
    {
        System.out.println("Son 2 can access Appa's cash:"+cash);
    }
}
public class Hierarchical {
    public static void main(String[] args) {
  Son1 s1=new Son1();
  Son2 s2=new Son2();
  s1.dis();
  s2.dis();
    
}
}
