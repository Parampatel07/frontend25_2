var express = require('express');
var connection = require('./connection');
var app = express();
app.delete('/student/:id', (request, response) => {
     let id = request.params.id;
     let data = [];
     let sql = `delete from students where id = ${id}`;
     connection.connection.query(sql, function (error, result) {
          if (error) {
               data.push({ 'error': error });
          }
          else {
               data.push({ 'error': 'no' });
               data.push({ 'success': 'yes' });
               data.push({ 'message': 'Student Deleted Successfully ' });
          }
          response.json(data);
     });
     connection.connection.end()
});
app.listen(5000);
console.log("Server ready ");