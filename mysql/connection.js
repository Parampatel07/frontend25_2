var mysql = require('mysql');

var con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     port: 3306,
     password: '',
     database: 'frontend25'
});

con.connect(function (error) {
     if (error == true) {
          console.log(error);
     }
     else {
          console.log("Connection established successfully... ");
     }
});

module.exports.connection = con;