var connection = require('./connection');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/students", async function (request, response) {
     let name = request.body.name;
     let age = request.body.age;
     let email = request.body.email;
     let password = request.body.password;
     console.log(`name is ${name} age is ${age} email is ${email} password is ${password}`);
     let data = {
          "name": name,
          "age": age,
          "email": email,
          "password": password,
     }
     await connection.client.connect();
     let database = connection.client.db('frontend25');
     database.collection("students").insertOne(data).then(function (error, result) {
          let answer = 0;
          if (error == true) {
               answer = [
                    { 'error': 'Oops something went wrong ' }
               ]
          }
          else {
               answer = [
                    { 'error': 'no' },
                    { 'success': 'yes' },
                    { 'message': 'Student Added Successfully ' },
               ];
          }
          response.json(answer);
     });
});

app.listen(5000);
console.log("Server ready ");