function firstNonRepeatedChar(str) 
{
 // Write your code here
	
	for (let index = 0; index < bound; index++) 
	{
		let c=0;
		for (let j = 0; j < bound; j++) 
		{
			if (index==j) 
			{
				continue;
			}
			else
			{
				if(str[index]==str[j])
				{
					c++;
				}
			}
			if(c==0)
			{
				return str[index];
			}
		}
	}
	return null;
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 

