var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
     if (request.url == '/delete-fruits') {
          fs.unlink('fruits.txt', function (error) {

               if (error == true) {
                    console.log(error);
               }
               else {
                    console.log("File Deleted Successfully..");
               }
          });
     }
     if (request.url == '/rename') {
          fs.rename('friends.txt', 'bhaiband.txt', function (error) {
               if (error == true) {
                    console.log(error);
               }
               else {
                    console.log("File Renamed Successfully ");
               }
          });
     }
});
server.listen(5000);
console.log("Server Ready ");