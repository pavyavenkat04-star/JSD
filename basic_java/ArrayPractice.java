import java.util.Scanner;
public class ArrayPractice {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter size of array:");
        int size=scan.nextInt();
        int sum=0;
        int even_sum=0;
        int array[]=new int[size];
        for (int i=0;i<size;i++)
        {
        System.out.print("Enter element array["+i+"]:");
        array[i]=scan.nextInt();
        sum=sum+array[i];
        if (array[i]%2==0)
            even_sum=even_sum+array[i];
        } 
        System.out.println("Array elements:");
        for (int i=0;i<size;i++)
        {  
            System.out.print(" "+array[i]);
        }
        System.out.println("");
        int big=array[0];
        int small=array[0];
        for(int i=0;i<size;i++)
        {
            if (array[i]>big)
                big=array[i];
            else if (array[i]<small)
                small=array[i];

        }System.out.println("Largest num:"+big);
        System.out.println("Smallest num:"+small);
        System.out.println("Sum of the even elements in array:"+even_sum);
        System.out.println("Sum of the array elements:"+sum);
        scan.close();
    }
}
