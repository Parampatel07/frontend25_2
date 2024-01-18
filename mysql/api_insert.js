var express = require('express');
var connection = require('./connection');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
// app.use(express.urlencoded({extended : true }))

app.post('/students', function (request, response) {
     // let name = request.body.name;
     // let contact = request.body.contact;
     // let age = request.body.age;
     // let gender = request.body.gender;
     // let address = request.body.address;
     // let dob = request.body.dob;
     // console.log(request.body);
     let { name, contact, age, gender, address, dob } = request.body;
     let data = [ ];
     console.log(`name is ${name} , age is ${age} , gender is ${gender} , address is ${address} , dob is ${dob} , contact is ${contact}`);

     let sql = `insert into students ( name , age , gender , address , dob , contact ) values ( '${name}' , ${age} , ${gender} , '${address}' , '${dob}' , '${contact}' );`;
     connection.connection.query(sql, function (error, result) {

          if (error) {
               data.push({'error':error});
          }
          else
          {
               data.push({'error':'no'});
               data.push({'success':'yes'});
               data.push({'message':'Student added Successfully'});
          }
          response.json(data);
     });
     // connection.connection.end(); 
});
app.listen(5000);
console.log("Server ready ");