var connection = require('./connection');
var sql = `INSERT into students (name,age,contact,dob,gender,address) values ( 'Param Patel ' , 19 , '9874563210' , '2004-02-10' , 1 , 'this is address' )`;

connection.connection.query(sql, function (error, result) {
     if (error == true) {
          console.log(error);
     }
     else {
          console.log(result);
     }
});
connection.connection.end();