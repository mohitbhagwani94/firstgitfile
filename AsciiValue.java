import java.io.*;
import java.lang.String;
public class AsciiValue
{
	public static void main(String agr[])
	{
	BufferedReader br = new BufferedReader (new InputStreamReader (System.in));
	for(int i=0;i<agr.length;i++)
		{	
			char a =agr.charAt(i);
			int b=(int) a;
			System.out.println(b);
		}
	
	}
}