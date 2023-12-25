var http = require('http');
var server = http.createServer(function (request, response) {
     console.log(request.url);
     response.writeHead(200, { 'content_type': 'text/html' });
     if (request.url == '/contactus') {
          response.write(`<html>
                         <head></head>
                         <body>
                              <h1>This is Contact us </h1>
                         </body>
                    </html>`);
     }
     else if (request.url == '/aboutus') {
          response.write(`<html>
                              <head></head>
                              <body>
                                   <h1>This is About us </h1>
                              </body>
                         </html>`);
     }
     else if (request.url == '/') {
          response.write(`<html>
                              <head></head>
                              <body>
                                   <h1>This is Home Page </h1>
                              </body>
                         </html>`);
     }
     else {
          response.write(`<html>
                              <head></head>
                              <body>
                                   <h1>404 page not found </h1>
                              </body>
                         </html>`);
     }
     response.end();
});
server.listen(5000);
console.log("Server ready....");