var express = require('express');
var connection = require('./connection');
var app = express();

app.get("/login/:email/:password", function (request, response) {
     let data = [];
     let email = request.params.email;
     let password = request.params.password;

     console.log(`email is ${email} and password is ${password}`);

     let sql = `SELECT * from user where email = '${email}' and password = '${password}' `;
     connection.connection.query(sql, function (error, result) {

          if (error == true) {
               response.json({ 'error': error });
          }
          else {
               data.push({ 'error': 'no' });
               if (result.length > 0) {
                    data.push({ 'success': 'yes' });
                    data.push({ 'message': 'Login Successfully ' });
               }
               else {
                    data.push({ 'success': 'no' });
                    data.push({ 'message': 'Invalid Login Attempt ' });
               }
               response.json(data);
          }
     });
     // connection.connection.end();
});
app.listen(5000);
console.log("Server ready ");