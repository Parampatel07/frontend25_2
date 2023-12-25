var fs = require('fs');
var data = ' pruthvi vishal bharat'
fs.appendFile('friends.txt', data, function (error) {
     if (error == true) {
          console.log("error : " + error);
     }
     else {
          console.log("Data written successfully ");
     }
});