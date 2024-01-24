var connection = require('./connection');

async function updateStudent() {
     try {

          await connection.client.connect();

          var database = connection.client.db("frontend25");

          let search = { 'name': 'Param Patel' };
          let newValue = { $set: { 'age': 20, 'email': 'iamparam102@gmail.com' } };

          database.collection("students").updateOne(search, newValue).then(function (error, result) {
               if (error == true) {
                    console.log(error)
               }
               else {
                    console.log("Student Updated Successfully ");
               }
               connection.client.close();
          });
     }
     catch {
          console.log("Oops Something went Wrong ");
     }
}
updateStudent();