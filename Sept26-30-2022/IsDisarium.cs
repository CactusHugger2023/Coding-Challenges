public class IsDisarium
{
	public static bool Is_Disarium(int i){
        int length = (i.ToString()).Length;
        int tot = 0;
        int num = i;
        while (num != 0){
            int remainder = num % 10;
            tot += (int)Math.Pow(remainder, length--);
            num /= 10;
        }
        return (tot == i);
    }
	public static void Main()
	{
		int n = 135;
        
        Console.Write(Is_Disarium(n) ? "Disarium Number" : "Not a Disarium Number");
	}
}