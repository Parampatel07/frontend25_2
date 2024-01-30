var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', 'pages');
app.get("/lesson2", function (request, response) {

     response.render('lesson2')

});
app.listen(5000);
console.log("Server ready ");