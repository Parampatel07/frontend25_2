var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {

     if (request.url == '/info') {
          fs.readFile("demo.txt", function (error, result) {
               response.writeHead(200,{'content-type':'text/html'});
               response.write(result);
               response.end();
          });  
          console.log("file readed Successfully... ");

          // let data = fs.readFileSync("demo.txt");
          // console.log(data);
          // console.log("file readed Successfully... ");
     }
});
server.listen(5000);
console.log("Server ready ");