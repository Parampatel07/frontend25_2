var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', 'pages');

app.get("/contact-us", function (request, response) {

     let data = {
          'name': "Param Patel ",
          'email': 'IamParam102@gmail.com',
          'mobile_number': '9874563210',
          'age': 20,
     }

     response.render('lesson3',data);
});
app.listen(5000);
console.log("Server ready ");