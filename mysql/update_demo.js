var connection  = require('./connection');
var sql = `Update students set contact = '1234567890' where id = 2`;
connection.connection.query(sql,(error,result)=>{
     if(error)
     {
          console.log(error);
     }
     else
     {
          console.log(result);
     }
});
connection.connection.end();