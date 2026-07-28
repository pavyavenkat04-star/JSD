**TASK:**
## TN EB bill calculator.
```java
import java.util.Scanner;
public class EbBill {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter no of units:");
        int units=scan.nextInt();
        scan.close();
        float amnt=0f;
        float amnt1=0f;
        float amnt2=0f;
        if(units<=500)
        {if(units<=200)
            amnt=0;
            else if(units>=201 && units<=400)
                amnt=(units-200)*4.70f;
            else 
                amnt1=200*4.70f;
                amnt2=(units-400)*6.30f;
                amnt=amnt1+amnt2;
        }
        else
        {
                amnt=(units-500)*8.40f+300*4.70f+100*6.30f;  
        }
        System.out.println("No of units used:"+units);
        System.out.println("EB Bill amount:"+amnt);
    }
}
```
**Output:**
```bash
1.Enter no of units:
415
No of units used:415
EB Bill amount:1034.5
```
```bash
2.Enter no of units:
530
No of units used:530
EB Bill amount:2292.0
```