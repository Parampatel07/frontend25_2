// Write a programe to print any 2 digit number in words 
// number = 54
// five four 
var express = require('express');
var app = express();

app.get('/numbers/:number', function (request, response) {

     let number = request.params.number;
     console.log(number);

     let second = number % 10;
     let first = parseInt(number / 10);
     console.log(`The value of first is ${first} and second is ${second}`);
     let words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

     response.send(` ${words[first]}  ${words[second]} `);
});
app.listen(5000);
console.log("Server ready ");