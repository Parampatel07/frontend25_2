var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', 'pages');

app.get("/each-loop", function (request, response) {

     let data = {
          'friends': ['param', 'vishal', 'vivek', 'bharat', 'jenil', 'krrish', 'pruthvi'],
     }
     response.render("lesson5", data);

});

app.get("/each-loop-object", function (request, response) {

     let data = {
          'person': {
               'name': 'Param Patel',
               'age': 20,
               'gender': 'Male',
               'email': 'iamparam102@gmail.com',
          }
     }
     response.render('lesson6', data);
});

app.listen(5000);
console.log("Server ready ");