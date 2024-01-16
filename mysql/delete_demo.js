var connection = require('./connection');
var sql = `DELETE from students where id = 2 `;
connection.connection.query(sql, (error, result) => {
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