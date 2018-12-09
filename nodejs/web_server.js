// Creates a basic http web server

// Defining constants

const http = require('http');
const port = 3000 ;
const hostname = '127.0.0.1'

// Creating a http server
const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World \n');
});

// setting server on listening mode
server.listen(port, hostname, () => {
	console.log('Server is running at', hostname, 'on port', port);
});

