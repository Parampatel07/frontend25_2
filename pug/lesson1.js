var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','pages');

app.get("/lesson1",function(request,response){

     response.render('lesson1');

});
app.listen(5000);
console.log("Server ready ");