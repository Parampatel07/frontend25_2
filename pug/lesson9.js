var express = require('express');
var app  = express();
const path = require('path');

app.set("view engine",'pug');
app.set('views','pages');
app.use(express.static(path.join(__dirname,'public')));

app.get('/path',function(request,response){

     console.log(path.join(__dirname,'public'));
     response.render('lesson10');

});
app.listen(5000);
console.log("Server ready ");