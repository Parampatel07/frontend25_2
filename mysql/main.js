var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var get = require('./get_students');
var add = require('./add_student');
var update = require('./update_student');
var remove = require('./delete_student');
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.get('/students', (request, response) => get.getStudent(request, response));

app.post('/students', (request, response) => add.addStudent(request, response));

app.put('/students/:id/:address', (request, response) => update.updateStudent(request, response));

app.delete('/students/:id', (request, response) => remove.deleteStudent(request, response));

app.listen(5000);
console.log("Server ready ");