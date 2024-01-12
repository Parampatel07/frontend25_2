// Write a programe to findout wether the login is valid or not 
// email = 'demo@gmail.com'
// password = "123123"
var express = require('express');
var app = express();
var bodyParese = require('body-parser'  );
app.use(express.json());
app.post("/login", function (request, response) {
     let email = request.body.email;
     let password = request.body.password;
     if (email === "demo@gmail.com" && password === "123123") {
          response.send("Login Successfully ");
     }
     else {
          response.send("Login Invalid ");
     }
});
app.listen(5000);
console.log("Server ready ");