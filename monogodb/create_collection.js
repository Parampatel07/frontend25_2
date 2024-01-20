var connection = require('./connection');

async function createCollection() {
     try {
          await connection.client.connect();
          var database = await connection.client.db('frontend25');
          console.log("Connection successfully ");
          database.createCollection("country").then(function (error, result) {
               if (error == true) {
                    console.log(error);
               }
               else {
                    console.log("Collection created Successfully ");
               }
               connection.client.close();
          });
     }
     catch {
          console.log("Oops something went wrong ");
     }
}
createCollection();