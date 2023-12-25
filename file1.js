// Example of reading file 
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {

     if (request.url == '/profile') {
          fs.readFile('demo.html', function (error, data) {

               if (error == true) {
                    console.log(error);
               }
               else {
                    response.writeHead(200, { 'content-type': 'text/html' });
                    response.write(data);
                    response.end();
               }
          });
          console.log("File readed successfully... ");
     }
});
server.listen(5000);
console.log("Server ready... ");