var express = require('express');
var app = express();

app.get("/aboutus", function (request, response) {
     response.send("This is about us ");
});

app.get("/contactus", function (request, response) {
     response.send("This is contact us ");
});
app.listen(5000);
console.log("Server ready ");