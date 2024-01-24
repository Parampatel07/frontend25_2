var mongodb = require('mongodb');
var connection = require('./connection');
async function deleteStudent() {
     try {
          await connection.client.connect();
          var database = connection.client.db('frontend25');

          let search = { '_id': new mongodb.ObjectId('65af53bb11f9675b22b2eb81')}

          database.collection('country').deleteOne(search).then(function (error, result) {
               if (error == true) {
                    console.log("error " + error);
               }
               else {
                    console.log("Country Deleted Successfully ");
               }
               connection.client.close();
          });
     }
     catch(error2) {
          console.log("Oops Something Went Wrong " + error2);
     }
}

deleteStudent();