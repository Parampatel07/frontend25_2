var express = require('express');
var app = express();
var bodyParese = require('body-parser');

app.use(express.json());
// app.use(express.urlencoded('extended', false))
app.post("/login", function (request, response) {

     let email = request.body.email;
     let password = request.body.password;

     console.log(`THe value of email is ${email} and password is ${password}`);
});
app.listen(5000);
console.log('Server ready ');