var collection = {
     'info': function (message) {
          console.log("Info : " + message);
     },
     'error': function (message) {
          console.log('Error : ' + message);
     },
     'data': function () {
          console.log("Hello my name is Param i am 19 years old ");
     }
}

module.exports = collection;