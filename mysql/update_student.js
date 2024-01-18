var connection = require('./connection');

function updateStudent(request,response){
     let id = request.params.id;
     let address = request.params.address;
     let data = [] ;
     let sql = `Update students set address = '${address}' where id = ${id}`;
     connection.connection.query(sql, function (error, result) {
          if (error) {
               data.push({ 'error': error });
          }
          else {
               data.push({ 'error': 'no' });
               data.push({ 'success': 'yes' });
               data.push({ 'message': 'Student Update Successfully ' });
          }
          response.json(data);
     });
     // connection.connection.end()
}
module.exports.updateStudent = updateStudent;