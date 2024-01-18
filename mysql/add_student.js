var connection = require('./connection');

function addStudent(request, response) {
     let { name, contact, age, gender, address, dob } = request.body;
     let data = [];
     console.log(`name is ${name} , age is ${age} , gender is ${gender} , address is ${address} , dob is ${dob} , contact is ${contact}`);

     let sql = `insert into students ( name , age , gender , address , dob , contact ) values ( '${name}' , ${age} , ${gender} , '${address}' , '${dob}' , '${contact}' );`;
     connection.connection.query(sql, function (error, result) {

          if (error) {
               data.push({ 'error': error });
          }
          else {
               data.push({ 'error': 'no' });
               data.push({ 'success': 'yes' });
               data.push({ 'message': 'Student added Successfully' });
          }
          response.json(data);
     });
}

module.exports.addStudent = addStudent;