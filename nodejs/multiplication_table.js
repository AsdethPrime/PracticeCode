// A simple javascript program that prints out multiplication table


for ( i = 1; i <= 5 ; i++) 
{
	console.log("***************************************");
	console.log(" Multiplication table of " + i );
	console.log("****************************************");
	for ( j = 1; j <= 10; j++)
	{
		console.log(i + " * " + j + " = " + i*j );
	}
}

