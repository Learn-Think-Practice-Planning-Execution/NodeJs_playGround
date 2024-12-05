import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';

const currtdir = path.dirname(fileURLToPath(import.meta.url));

console.log('currtdir', currtdir);

const filename = 'asyncawaitfile.txt';
const filepath = path.join(currtdir, filename);
console.log('filepath', filepath);

//////////////////////////////////  read directory wit async and await /////////

const readdirdata = async () => {
  try {
    const dirData = await fs.promises.readdir(currtdir);
    console.log('dirData', dirData);
  } catch (error) {
    console.error(error);
  }
};

readdirdata();

//////////////////////////////////  write file with async and await /////////

const writefiledata = async () => {
  try {
    const filedata = 'async write data file';
    const dirData = await fsPromises.writeFile(filepath, filedata, 'utf-8');
    console.log('dirData', dirData);
  } catch (error) {
    console.error(error);
  }
};

writefiledata();
//////////////////////////////////  read file with async and await /////////

const readfiledata = async () => {
  try {
    const filedata = 'async write data file';
    const readFileData = await fsPromises.readFile(filepath, 'utf-8');
    console.log('readFileData', readFileData);
  } catch (error) {
    console.error(error);
  }
};

readfiledata();

//////////////////////////////////  append  file with async and await /////////

const appendfiledata = async () => {
  try {
    const updatefiledata = '\nasync write data file updated with new line';
    const appendfileData1 = await fsPromises.appendFile(filepath, updatefiledata, 'utf-8');
    console.log('appendfiledata', appendfileData1);
  } catch (error) {
    console.error(error);
  }
};

appendfiledata();

//////////////////////////////////  delete  file with async and await /////////

const deleteiledata = async () => {
  try {
    const unlinkData1 = await fsPromises.unlink(filepath);
    console.log('unlinkData1', unlinkData1);
  } catch (error) {
    console.error(error);
  }
};

// deleteiledata();
