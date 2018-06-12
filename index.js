var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', function(err, data) {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		response.write(data)
		response.end();
		});
    } 
    else {

		fs.readFile('./logo_blue.png', function(err, data) {
		response.setHeader("Content-Type", "image/png");
		response.write(data)
		response.end();
		});

    	
    }
});

server.listen(8080);