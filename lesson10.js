var http = require('http');
var server = http.createServer(function(request,response){
     console.log("hello world");
     console.log(request.url);
});
server.listen(5000);
console.log("Server ready ");