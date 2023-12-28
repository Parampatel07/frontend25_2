var events = require('events');
var em = new events.EventEmitter();

function keyPress(keyname) {
     console.log("key press started....");
     setTimeout(function () {
          console.log("Keypressed " + keyname);
     }, 3000)
     console.log("Key press fininshed ");
}

function mouseClick(click) {
     console.log("Mouse " + click + " click ");
}

em.once('onKeyPress', keyPress);
em.once('onMouseClick', mouseClick);

em.emit('onKeyPress', 'P');
em.emit('onMouseClick', 'right');
em.emit('onKeyPress', 'S');
em.emit('onMouseClick', 'left');
