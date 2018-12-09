// Demonstrating a simple use of a for statement in javascript

a = [ 'a', 'b', 'c', 'x', 'y', 'z' ];
result = '\n'
// For loop starts
for (i in a)
{
	result += 'index: ' + i + " " + "value "+ "= " + a[i] + '\n' ;
}

// Printing the end result
console.log(result);
