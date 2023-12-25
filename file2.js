var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {


     if (req.url == "/info") {

          try {
               let data = fs.readFileSync('demo.html');
               res.writeHead(200, { 'content-type': 'text/html' });
               res.write(data);
               res.end();
          }
          catch (error) {
               console.log(error);
          }
     }

});
server.listen(5000);
console.log("server ready...");