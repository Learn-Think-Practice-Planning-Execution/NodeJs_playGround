import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';

// use fsPromises ,, insted of fs.promises

// global path
const currentdirPath = path.dirname(fileURLToPath(import.meta.url));
console.log('currentdirPath', currentdirPath);

///////////////////////////// read data directory with fs promises modules  ///////////////////////////////////////////////////////////////////////////////

const currentdirPath1 = path.dirname(fileURLToPath(import.meta.url));

console.log(currentdirPath1);
const readfiles = fs.promises
  .readdir(currentdirPath1)
  .then((data) => {
    console.log('data', data);
    // data [
    //     'fs_module_CRED_1.js',
    //     'fs_module_Promise_2.js',
    //     'updatecreatefile.txt'
    //   ]
  })
  .catch((error) => {
    console.log('error', error);
  })
  .finally(() => {
    console.log('finaly');
  });

////////////////////////////// write data with FS promises module ////////////////////////////////////////////////

const filename = 'promisetext.txt';
const filedata = 'cewcdcsvcrvb rfvrdsfvrdf rrfcescfr efcewdc';
const filepath = path.join(currentdirPath, filename);

console.log('filepath', filepath);
const writepromise = fs.promises
  .writeFile(filepath, filedata, 'utf-8')
  .then((data) => {
    console.log('writepromise data', data);
  })
  .catch((error) => console.error('error', error));

/////////////////// reading file data fs promise modules //////////////////////////////////////
const readpromise = fs.promises
  .readFile(filepath, 'utf-8')
  .then((data) => {
    console.log('readpromise data', data);
  })
  .catch((error) => console.error('error', error));

/////////////     apppend file fs promise modules ///////////////////////
const updateData = '\nnew updated data apped using fs.promises ';
const appendfileData = fs.promises
  .appendFile(filepath, updateData, 'utf-8')
  .then((data) => {
    console.log('appendfileData data', data);
  })
  .catch((error) => console.error('error', error));

/////////////     delete  file fs promise modules ///////////////////////

// const deletefileData = fsPromises
//   .unlink(filepath)
//   .then((data) => {
//     console.log('appendfileData data', data);

//   })
//   .catch((error) => console.error('error', error));

// fs.promise is repeted every time
// import promises from "fs/promise"
// use only one variable
