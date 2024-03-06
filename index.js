// const http = require('http'); // default method
import http from 'http'; // to create a server and many more
import fs from 'fs'; // this is to read any file coming from client or database or local and operation on then
import path from 'path'; //
import { Person } from './personlist.js';
import express from 'express';

// create a server at top level
const app = express();

// add static file in express using middleware
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true })); // body parser
console.log(path.join(path.resolve(), 'public'));
//setting up ejs  as it is given below
app.set('view engine', 'ejs');

// create server from node
const vicky = new Person('vicky', 31, 5.9, 'panipat', 'house');
console.log('Person', Person, vicky);

// default way to make an app server

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     // read file , readfromFile is async function
//     const fileData = fs.readFile('./index.html', (error, data) => {
//       console.log('reading file ', error);
//       console.log('reading file ', data);
//       res.end(data);
//       //   res.end('<h1>this is root request</h1>', );
//     });
//   } else if (req.url === '/about') {
//     res.end(`<h1>this is about page data ${vicky.name} </h1>`);
//   } else {
//     res.end('<h1>not found </h1>');
//   }
// });

// server.listen(8000, () => {
//   console.log('server workingdcewcdewsc ');
// });

// by expess to deplay a server

app.get('/', (req, res) => {
  // gives current directory
  const htmlPath = path.resolve();
  res.status(200).sendFile(path.join(htmlPath, './index.html'));
});
app.get('/getrenderdata', (req, res) => {
  res.render('index', { name: 'vikas phougat', secondName: 'vicky phougat' });

  // costum html with ejs package
  // make a view folder

  res.status(200);
});
app.get('/staticfile', (req, res) => {
  res.status(200).sendFile('index.html', { root: path.join(path.resolve(), 'public') });
});

app.listen(8000);
