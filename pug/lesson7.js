var express = require('express');
var app = express();
var connection = require('./connection')
app.set('view engine', 'pug');
app.set('views', 'pages');
app.get("/orders", function (request, response) {
     let sql = "SELECT orderDate,requiredDate,shippedDate,status from orders";
     connection.connection.query(sql, function (error, result) {
          if (error) {
               response.json({ 'error': error });
          }
          else {
               let output = JSON.parse(JSON.stringify(result));
               console.log(output);
               response.render('lesson8', { 'response': output });
          }
     });
});
app.listen(5000);
console.log("Server ready ");