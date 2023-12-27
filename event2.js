var event = require('events');
var em = new event.EventEmitter();

function keyPress(keyname){
     console.log(keyname + " Press ");
}

function mouseClick(click){
     console.log(click + " Click ");
}

em.on('onKeyPress',keyPress);
em.on('onMouseClick',mouseClick);

em.emit('onMouseClick','right');
em.emit('onKeyPress','S');

em.removeListener('onMouseClick',mouseClick);
console.log("---------------------");
em.emit('onMouseClick','right');
console.log("---------------------");
em.removeListener('onKeyPress',keyPress);
em.emit('onKeyPress','P');