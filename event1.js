var event = require('events');
var em = new event.EventEmitter();

em.on('keyPress', function (keyname) {
     console.log("Key press " + keyname);
});

em.addListener('mouseClick',function(click){
     console.log(click + " Click ");
});

em.emit('keyPress','P');
em.emit('mouseClick','right');
em.emit('keyPress','S');
em.emit('mouseClick','left');