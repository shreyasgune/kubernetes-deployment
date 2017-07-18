var http = require('http');
var handleRequest = function (req,res){
  console.log('Received a request for the URL'+req.url);
  res.writeHead(200);
  res.end('Hello Shreyas. Welcome to gcloud Kubernetes-APP-174114');
};

var www = http.createServer(handleRequest);
www.listen(8080);
