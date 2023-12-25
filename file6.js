var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {

     if (request.url == '/change-content') {
          let data = fs.readFileSync('colors.txt');
          fs.writeFile('fruits.txt', data, function (error, result) {
               if (error == true) {
                    console.log(error);
               }
               else {
                    console.log("Written successfully ");
               }
          });
     }
     else if (request.url == '/append-sync') {
          let data = ' Brown purple';
          try {
               fs.appendFileSync('colors.txt', data);
               console.log("File written successfully ");
          }
          catch (error) {
               console.log(error);
          }
     }
});
server.listen(5000);
console.log("Server ready ");