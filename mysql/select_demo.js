var connection = require('./connection');
var sql = "SELECT * from students";

connection.connection.query(sql,function(error,result){

     if(error==true)
     {
          console.log(error);
     }
     else
     {
          console.log(result);
     }
});
connection.connection.end();