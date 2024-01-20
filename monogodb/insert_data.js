var connection = require('./connection');
async function addStudent() {
     try {
          await connection.client.connect();
          var database = connection.client.db("frontend25");
          var data = {
               'name': 'bharat',
               'age': 20,
               'gender': "Male",
               'email': 'bharat@gmail.com'
          }
          database.collection("students").insertOne(data).then(function (error, result) {
               if (error == true) {
                    console.log("error " + error);
               }
               else {
                    console.log("Student Inserted Successfully ");
               }
               connection.client.close();
          });
     }
     catch {
          console.log("Oops something went wrong ");
     }
}
addStudent();