var connection = require('./connection');
var express = require('express');
var app = express();

app.put("/students/:name/:age", async function (request, response) {

     let name = request.params.name;
     let age = request.params.age;
     console.log(`name is ${name} and age is ${age}`);
     await connection.client.connect();
     let database = connection.client.db("frontend25");
     let search = { 'name': name };
     let newvaule = { $set: { 'age': age } };
     database.collection("students").updateMany(search, newvaule).then(function (error, result) {
          let answer = 0;
          if (error == true) {
               answer = [
                    { 'error': 'Oops something went wrong ' },
               ];
          }
          else {
               answer = [
                    { 'error': 'no' },
                    { 'success': 'yes' },
                    { 'message': 'Student Updated Successfully ' },
               ]
          }
          response.json(answer);
     });
});
app.listen(5000);
console.log("server ready ");