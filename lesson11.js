var http = require('http');
var server = http.createServer(function (request, response) {
     // console.log(request);
     response.writeHead(200, { 'content-type': 'text/html' });
     console.log(request.url);
     if (request.url == '/aboutus') {
          response.write(`<html>
          <head></head>
          <body>
               <h1>This is About us </h1>
          </body>
     </html>`);
     }
     else if (request.url == '/profile') {
          response.writeHead(200, { 'content-type': 'application/json' });
          data = {
               'name': 'Param patel',
               'age': 19,
               'gender': 'Male',
               'email': 'iamparam102@gmail.com'
          }
          data = JSON.stringify(data);
          response.write(data);
     }
     response.end();
});
server.listen(5000);
console.log("Server ready... ");