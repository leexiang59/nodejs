/**
 * Created by willli on 2016/11/14.
 */
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World1\n')
}).listen(8888);

console.log('Server running at http:127.0.0.1:8888/')