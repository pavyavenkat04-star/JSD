class Headmaster{
    void show()
    {   
        System.out.println("Headmaster class");
    }
}
class Teacher extends Headmaster{
    void show()
    {   super.show();
        System.out.println("Teacher class");
    }
}
class Students extends Teacher{
    void show()
    {   
        System.out.println("Students class");
        super.show();
    }
}
public class Multilevel {
    public static void main(String[] args) {
        Students s=new Students();
        s.show();
    }
}
