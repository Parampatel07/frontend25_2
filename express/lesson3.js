var express = require("express");
var app = express();

app.get("/student/:name", function (request, response) {
     let name = request.params.name;
     console.log(name);
     response.send(`<h1>Your name is ${name}</h1>`);
});
app.listen(5000);
console.log("server ready ");