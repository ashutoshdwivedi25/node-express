const express = require('express');
const http = require('http');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use('/dishes',dishRouter);


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