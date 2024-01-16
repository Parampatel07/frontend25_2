var express = require('express');
var connection = require('./connection');
var app = express();

app.get('/students', function (request, response) {

     let sql = "SELECt * from students ";
     connection.connection.query(sql, function (error, result) {
          if (error == true) {
               response.json({ 'error': error });
          }
          else {
               let json_data = JSON.parse(JSON.stringify(result));
               response.json( json_data );
          }
     });
     connection.connection.end();
});
app.listen(5000);
console.log("Server ready ");