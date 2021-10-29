import java.util.Scanner;

public class Test {
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        System.out.print("Input a number: ");
        int n = in.nextInt();
        double res=0;
        for (int i=1;i<n;i++)
        {
            double del=1;
            for(int j=0;j<i;j++)
            {
                del*=i;
            }
            res+=(1/del);
        }
        System.out.print("Result: "+res);
    }
}
