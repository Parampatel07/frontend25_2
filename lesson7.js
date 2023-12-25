var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {

     //writedata
     if (request.url == '/writedata') {

          let content = 'Param vivek krish jenil ';

          fs.writeFile('friends.txt', content, function (error) {
               if (error == true)
                    console.log("error " + error);
               else
                    console.log("Data Written Successfully ");
          });
     }
});
server.listen(5000);
console.log("Server ready...");