var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});

	res.end("Hello Unipiloto APM-2\n alistando el servidor");
});

server.listen(3333);
