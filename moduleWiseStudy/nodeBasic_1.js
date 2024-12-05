// basic 1

// node has global object which has everything required for backend functionality
// console.log("globel object ", global);
// run a simgle node file
// type node and file name.js ,, then enter to run a file
console.log('globel object ', global);
// console.log('globel object ', global.console.log('learnig node'));
console.log('globel object ', globalThis.console.log('learnig node same'));

// console.log('globel object ', globalThis.console.log(globalThis.process)); // all node running  process  details of this  file or project
// console.log('globel object ', globalThis.console.log(process));

// use of globelTHis keyboard => can access any globel object in javascript enviroment
// borswe => windows object is global
// node => global object is global
// wef workers => self

//use  globalThis keyword and global print same thing

// globel object  <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Getter/Setter],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [AsyncFunction: fetch],
//     crypto: [Getter]
//   }

// basic 2

// =>  in node every define file is module , in build module by node is os , PATH , FS , HTTP

// console.log('globel object ', globalThis.console.log(module));
// module is a constant in node which is not related with globalThis of global Object

// commonjs export and required syntex
// fisrt way to require the file and then destructuring  that file
// example
// const nodeBasic_2 = require('./nodeBasic_2');
// const { add, sub, multi, divi } = nodeBasic_2;

// console.log('adding', nodeBasic_2.add(4, 7));
// console.log('adding', nodeBasic_2.sub(4, 7));
// console.log('adding', nodeBasic_2.multi(4, 7));
// console.log('adding', nodeBasic_2.divi(4, 7));

// console.log('adding', add(4, 7));
// console.log('adding', sub(4, 7));
// console.log('adding', multi(4, 7));
// console.log('adding', divi(4, 7));

//second way to import

// const { add, sub, multi, divi } = require('./nodeBasic_2'); // destructure and save as a const

// console.log('adding', add(4, 7));
// console.log('adding', sub(4, 7));
// console.log('adding', multi(4, 7));
// console.log('adding', divi(4, 7));

// thrid es module way
import { add, sub, multi, divi } from './nodeBasic_2.js';
import { Person } from '../personlist.js';
// import nodeBasic_2 from './nodeBasic_2';
// const { add, sub, multi, divi } = nodeBasic_2;

const vicky = new Person('vicky', 31, 5.9, 'panipat', 'house');
console.log('adding', vicky);
console.log('adding', add(4, 7));
console.log('adding', sub(4, 7));
console.log('adding', multi(4, 7));
console.log('adding', divi(4, 7));
