var connection = require('./connection');

async function addMulitpleStudents() {
     try {

          await connection.client.connect();

          var database = connection.client.db("frontend25");

          var data = [
               {
                    'name': 'India',
                    'state': 28,
                    'union': 8
               },
               {
                    'name': 'usa',
                    'state': 50
               }
          ]
          database.collection("country").insertMany(data).then(function (error, result) {
               if (error == true) {
                    console.log("Error " + error);
               }
               else {
                    console.log("Country Addedd successfully");
               }
               connection.client.close();
          })

     }
     catch {
          console.log("Oops Something went wrong ");
     }
}
addMulitpleStudents();