var fs = require('fs');
var http = require('http');
var server = http.createServer(function (request, response) {

     if (request.url == '/append-data') {
          let data = "Red Blue Green Yellow Black White ";
          try {
               fs.writeFileSync("colors.txt", data);
               console.log("File Written Successfully ");
          }
          catch
          {
               console.log("We got some error");
          }
     }

});
server.listen(5000);
console.log("Server ready ");