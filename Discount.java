import java.util.Scanner;

class Discount
{public static void main(String[] args) {
    Scanner scan=new Scanner(System.in);
    System.out.println("Enter purchased amount:");
    float amnt=scan.nextFloat();
    float discount=0f;
    if (amnt<1000)
    {discount=0f;

    }
    else if (amnt>=1000 && amnt<=1999) 
        {discount=(0.05f)*amnt;
            System.out.println("you have 5% discount");
        
    }
    else if (amnt>=2000 && amnt<=3999) 
        {discount=(0.07f)*amnt;        
            System.out.println("you have 7% discount");
    }
    else if(amnt>=4000 && amnt<=6000)
    {discount=(0.08f)*amnt;
        System.out.println("you have 8% discount");

    }else
    {discount=(0.1f)*amnt;
        System.out.println("you have 10% discount");

    }
    System.out.println("Total purchased amount:"+amnt);
    System.out.println("Discount amount:"+discount);
    System.out.println("Final amount to be paid:"+(amnt-discount));

}}