var connection = require('./connection');

async function getStudents() {

     await connection.client.connect();
     let database = connection.client.db("frontend25");

     var data = await database.collection('students').find({ name: 'Param Patel' }, { projection: { _id: 1, email: 0 } }).toArray();
     console.log(data);
}

async function getLimitedStudent(limit) {

     try {
          await connection.client.connect();
          let database = connection.client.db("frontend25");

          var data = await database.collection('students').find({}, { projection: '' }).limit(limit).sort("age").toArray();
          console.log(data);
     }
     catch (error) {
          console.log("error" + error);
     }
}
getLimitedStudent(2);