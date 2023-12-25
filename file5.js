var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
     if (request.url == '/append-file') {
          let data = "Pink Orange";
          fs.appendFile('colors.txt', data, function (error) {
               if (error == true) {
                    console.log(error);
               }
               else {
                    console.log("Data written successfully ");
               }
          });
     }
});
server.listen(5000);
console.log("Server ready ");