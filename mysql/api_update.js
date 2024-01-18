var express = require('express');
var connection = require('./connection');
var app = express();
app.put('/student/:id/:address', (request, response) => {
     let id = request.params.id;
     let address = request.params.address;
     let data = [] ;
     let sql = `Update students set address = '${address}' where id = ${id}`;
     connection.connection.query(sql, function (error, result) {
          if (error) {
               data.push({ 'error': error });
          }
          else {
               data.push({ 'error': 'no' });
               data.push({ 'success': 'yes' });
               data.push({ 'message': 'Student Update Successfully ' });
          }
          response.json(data);
     });
     connection.connection.end()
});
app.listen(5000);
console.log("Server ready ");