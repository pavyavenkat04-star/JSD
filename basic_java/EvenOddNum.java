import java.util.Scanner;

public class EvenOddNum {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter any no:");
        long no=scan.nextLong();
        long rem=0;
        long even_count=0;
        long odd_count=0;
        long even_sum=0;
        long odd_sum=0;
        long edis=0,odis=0;
        while(no!=0)
        {rem=no%10;
         no=no/10;
         if(rem%2==0)
            {even_count=even_count+1;
            even_sum=even_sum+rem; 
            edis=edis*10+rem;
            }
        else
        {odd_count++;
        odd_sum=odd_sum+rem;
        odis=odis*10+rem;  
        }
        }
    
        System.out.println("Even numbers:"+edis);
        System.out.println("Odd numbers:"+odis);
        System.out.println("Even numbers count:"+even_count);
        System.out.println("Odd numbers count:"+odd_count);
        System.out.println("Even numbers sum:"+even_sum);
        System.out.println("Odd numbers sum:"+odd_sum);
    }

}
