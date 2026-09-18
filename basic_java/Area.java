public class Area {
    //polymorphism : method name is same and can perform more than one operations.
    //This is constructor overloading example
Area(int a)
{
    System.out.println("Area of square:"+(a*a));
}
Area(int l , int b)
{
    System.out.println("Area of rectangle:"+(l*b));

}
Area(float r)
{
    System.out.println("Area of square:"+(Math.PI*r*r));
}
public static void main(String[] args) {
    new Area(9.3f);
    new Area(4);
    new Area(4,6);
}
}
