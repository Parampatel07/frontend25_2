var http = require('http');
var fs = require('fs');
var buffer = new Buffer.alloc(1024);
var server = http.createServer(function (request, response) {

     if (request.url == '/open-close-file') {
          fs.open('colors.txt', function (error, file_data) {
               fs.read(file_data, buffer, 0, buffer.length, 0, function (read_error, data) {
                    if (read_error == true) {
                         console.log(error);
                    }
                    else {
                         if (data > 0) {
                              console.log(buffer.slice(0, data.toString()));
                              let text = buffer.slice(0, data.toString());
                              response.writeHead(200, { 'content-type': 'text/html' });
                              response.write(text);
                              response.end();
                         }
                    }
                    fs.close(file_data, function (close_error) {
                         if (close_error == true) {
                              console.log("Error closing file ");
                         }
                         else {
                              console.log("File Closed Successfully");
                         }
                    })
               });

          });
     }

});
server.listen(5000);
console.log("Server ready...");