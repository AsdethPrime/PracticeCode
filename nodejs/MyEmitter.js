const EventEmitter = require('events')

// creating a standard EventEmitter object called MyEmitter 
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter()

//using the on function of EvenEmitter object to register a listerner.
//the listener simply wait for an 'event' ; when it is emitted it print 'an event occured' on the screen

myEmitter.on('event', () => {
	console.log('an event occured');
});

// Emiting an event name 'event' 
myEmitter.emit('event')
