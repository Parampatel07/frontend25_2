var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {

     var data = url.parse(request.url);
     console.log(data.search);

});
server.listen(5000);
console.log("Server ready ");