var connection = require('./connection');
var express = require('express');
var app = express();

app.get('/students', async function (request, response) {

     await connection.client.connect();
     var database = connection.client.db("frontend25");
     try {
          var data = await database.collection("students").find({}, { projection: { _id: 0 } }).sort("name").toArray();
          let json_data = JSON.parse(JSON.stringify(data));
          let result = [
               { 'error': 'no' },
               { 'success': 'yes' },
               { 'total': json_data.length },
               { 'data': json_data },
          ];
          response.json(result);
     }
     catch (error) {
          console.log("Error  " + error);
          let result = [
               { 'error': "Oops something went wrong " }
          ];
     }
});
app.listen(5000);
console.log("Server ready ");