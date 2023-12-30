var express = require('express')
var app = express();

app.use(function (request, response, next) {
     console.log("Hello this is first middleware ");
     next();
});

app.use(function (request, response, next) {
     console.log("Hello this is second middleware ");
     next();
});

app.get("/about-us", function (request, response) {
     response.send("<h1>This is About us </h1>");
});
app.listen(5000);
console.log("server ready ");