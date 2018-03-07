const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req,res,next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-type','text/html');
	res.end('<html><head><body><h1>Express Server</h1></body></head></html>');

});
const server = http.createServer(app);

server.listen(port,hostname, () => {
	console.log('Server Running at port 3000...');
});