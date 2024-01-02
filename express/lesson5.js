// Write a programe to findout area of triangle 
var express = require('express');
var app = express();

app.get('/triangle/:height/:base', function (request, response) {
     let base = request.params.base;
     let height = request.params.height;
     let triangle = height * base / 2;
     console.log(height);
     console.log(base);
     response.send(`<h1>The value of answer is ${triangle} </h1>`);
});

// Write a programe print table of user given number 
// 5 x 1 = 5 
// 5 x 2 = 10 
// 5 x 3 = 15 

app.get('/table/:table', function (request, response) {

     let table = request.params.table;
     console.log(table);
     let output = '';
     let count = 1;
     for (count = 1; count <= 10; count++) {
          output = table * count;
          console.log(` ${table} x ${count} = ${output}`);
     }
});


// Write a programe to print user's name and email in browser take input name and email from user 
// hello name this is your email 
app.get('/info/:name/:email', function (request, response) {

     let name = request.params.name;
     let email = request.params.email;

     response.send(`<h1>hello ${name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this is your ${email}</h1>`)
});
app.listen(5000);
console.log("server ready ");