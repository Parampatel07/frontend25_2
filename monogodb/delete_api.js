var connection = require('./connection');
var express = require('express');
var app = express();

app.delete("/students/:name", async function (request, response) {
     try {
          let answer = [];
          await connection.client.connect();
          let database = connection.client.db("frontend25");
          let name = request.params.name;
          database.collection("students").deleteOne({"name":name}).then(function (err, res) {
               if (err == true) {
                    answer.push({ 'error': 'Oops something went wrong ' });
               }
               else {
                    answer.push({ 'error': 'no' })
                    answer.push({ 'success': 'yes' })
                    answer.push({ 'message': 'Student Deleted Successfully ' });
               }
               response.json(answer);
          });
     }
     catch (error) {
          console.log(error);
     }
});
app.listen(5000);
console.log("Server ready ");