var connection = require('./connection');
function getStudent(request, response) {

     let data = [];
     let sql = "SELECT * from students ";
     connection.connection.query(sql, function (error, result) {

          if (error) {
               data.push({ 'error': error });
          }
          else {
               let json_formate = JSON.parse(JSON.stringify(result));
               data.push({ 'error': 'no' });
               data.push({ 'success': 'yes' });
               data.push({ 'total': result.length });
               data.push({ 'data': json_formate });
          }
          response.json(data);
     });

}

module.exports.getStudent = getStudent;