const express = require('express');
const http = require('http');
const hostname = 'localhost';
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.all('/dishes' , (req,res,next) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text/plain');
	next();
});

app.get('/dishes' , (req,res,next) => {
	res.end('Will send all the dishes to you');
});

app.post('/dishes' , (req,res,next) => {
	res.end('Will add the dish: ' + req.body.name + 'with details' + req.body.description);

});

app.put('/dishes' , (req,res,next) => {
	res.statusCode = 403;
	res.end('PUT operation not supported');
});

app.delete('/dishes' , (req,res,next) => {
	res.end('Deleting all the dishes');
});

app.get('/dishes/:dishId' , (req,res,next) => {
	res.end('Will send the dish' + 
		req.params.dishId + 'to you!');
});

app.post('/dishes/:dishId' , (req,res,next) => {
	res.statusCode = 403;
	res.end('POST operation not supported');

});

app.put('/dishes/:dishId' , (req,res,next) => {
	res.write('Updating the dish: ' + req.params.dishId);
	res.end('Will update the dish : ' + req.body.name +
		'with details: ' + req.body.description);
});

app.delete('/dishes/:dishId' , (req,res,next) => {
	res.end('Deleting dish' + req.params.dishId);
});

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