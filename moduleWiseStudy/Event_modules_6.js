// import EventEmitter class
import EventEmitter from 'events';

// importent point to node ,,it is a class some use one word captial then call its instance
// create intance of it
const emitter = new EventEmitter();

emitter.on('greet', (userName) => {
  console.log('hello vikas');
  console.log(userName);
});
// define an event listner (addlistner)
// emitter.emit('greet');

// you can passs arrgument whiole emitting
emitter.on('greet', (userName) => {
  console.log('i m a developer', userName);
});
// define an event listner (addlistner)

emitter.emit('greet', { name: 'vikas' }); // alwasy send data as a single onbject for make things easy or array

//////////////////////////////////

//   (method) NodeJS.EventEmitter<DefaultEventMap>.emit<any>(eventName: string | symbol, ...args: AnyRest): boolean
// Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

// Returns true if the event had listeners, false otherwise.

// import { EventEmitter } from 'node:events';
// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on('event', function firstListener() {
//   console.log('Helloooo! first listener');
// });
// // Second listener
// myEmitter.on('event', function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// // Third listener
// myEmitter.on('event', function thirdListener(...args) {
//   const parameters = args.join(', ');
//   console.log(`event with parameters ${parameters} in third listener`);
// });

// console.log(myEmitter.listeners('event'));

// myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
