var express = require('express');
var app = express();

app.get("/about-us", function (request, response) {
     response.send("This is about us from GET request ");
});

app.post("/about-us", function (request, response) {
     response.send("This is about us from POST request");
});

app.put("/about-us", function (request, response) {
     response.send("THis is about us from PUT request ");
});

app.delete("/about-us", function (request, response) {
     response.send("This is about us from DELETE request ");
});

app.listen(5000);
console.log("Server ready....");