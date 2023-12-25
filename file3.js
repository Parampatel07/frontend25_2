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
     else if (request.url == "/info") {
          try {
               let data = fs.readFileSync('colors.txt');
               response.writeHead(200, { 'content-type': 'text/html' });
               response.write(data);
               response.end();
          }
          catch (error) {
               console.log(error);
          }
     }
});
server.listen(5000);
console.log("Server ready ");