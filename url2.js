var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (request, response) {
     let url_data = url.parse(request.url);
     console.log(url_data);
     let filename = '.' + url_data.pathname;
     console.log(filename);
     fs.readFile(filename, function (error, result) {
          if (error == true) {
               console.log("error : " + error)
          }
          else {
               response.writeHead(200, { 'content-type': 'text/html' });
               response.write(result);
               response.end();
          }
     });
});
server.listen(5000);
console.log("Server ready ");