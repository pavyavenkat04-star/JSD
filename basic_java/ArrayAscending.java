import java.util.Scanner;
public class ArrayAscending {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("enter array size:");
         int size=scan.nextInt();
         int arr[]=new int[size];
         int temp=0;
        System.out.println("Enter array elements:");
        for (int i=0;i<size;i++)
        {
            arr[i]=scan.nextInt();        
        }   scan.close();
        System.out.println("Array elements before sorting:");
        for (int i=0;i<size;i++)
        {
            System.out.print(" "+arr[i]);    
        }   
        for(int i=0;i<size;i++)
        {for (int j=i+1;j<size;j++)
            if(arr[i]>arr[j])
               { temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
               }
        }System.out.println();
         System.out.println("Array elements in ascending order:");
          for (int i=0;i<size;i++)
        {
            System.out.print(" "+arr[i]);    
        }   
    }
}
