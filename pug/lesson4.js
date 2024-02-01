var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', 'pages');
app.get("/conditionals", function (request, response) {

     let data = {
          'email1': 'iamparam102@gmail.com'
     }
     response.render('lesson4',data);

});
app.listen(5000);
console.log("Server ready ");