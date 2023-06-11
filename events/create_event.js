var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an event handler: This is the function that will be called when the event is fired(call emit).
var myEventHandler = function () {
    console.log('I hear a scream!');
}

// Assign the event handler to an event.
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event.
eventEmitter.emit('scream');
