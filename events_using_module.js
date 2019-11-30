var khristEvent = require('events');
var khristEventEmitter = new khristEvent.EventEmitter();

// Creating an event handler to handle our event
var khristStartEventHandler = function() {
  console.log('Start to ride the bike');
};

var khristStopEventHandler = function() {
  console.log('stop riding the bike');
};

// assign event handler to an event
khristEventEmitter.on('start', khristStartEventHandler);
khristEventEmitter.on('stop', khristStopEventHandler);

//Firing the 'bark' event
khristEventEmitter.emit('start');
khristEventEmitter.emit('stop');
