// A simple js program to print star like pattern made up of *

// ***********************************************************

// Step 1: Creating a function responsible for printing *s

function print_stars(height, width)
{
	res = '\n';
	for ( i = 1 ; i <= height; ++i ) 
	{
		for ( j = 1; j <= width; ++j )
		{
			res = res + '* ';
			
		}

		res = res + '\n';

	}
	console.log(res);
	return 0;
}


// Step 2: Calling the function 

print_stars(10,10);
