class Father{
    int k=100;
    int d=200;

}class Son extends Father{
    void show()
    {
        System.out.println("derived class son:"+d);
        System.out.println("derived class son:"+k);
    }
}
public class Single{
    public static void main(String[] args) {
        Son s=new Son();
        s.show();
    }
}