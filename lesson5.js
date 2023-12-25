var http = require('http');
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'application/json' })
     if (request.url == '/profile') {
          let data = {
               'name': 'Param patel',
               'age': 19,
               'gender': 'Male',
               'email': 'iamparam102@gmail.com'
          };
          response.write(JSON.stringify(data));
     }
     else {
          response.write({ 'error': '404 Page not found' });
     }
     response.end();
});
server.listen(5000);
console.log("Server Ready...");