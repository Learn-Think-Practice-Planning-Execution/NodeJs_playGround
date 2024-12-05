import fs, { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file URL
const currentFIleUrl = fileURLToPath(import.meta.url); //
console.log('Current currentFIleUrl:', currentFIleUrl);
// Current currentFIleUrl: D:\viki data\viki\node\NodeJs_playGround\moduleWiseStudy\fs\fs_module.js

// Get the current directory
// add url to path.dirname to get current directory ,, es module way to get current file directory ,, in unix it is pwd command

const __EsDirname = path.dirname(currentFIleUrl);
console.log('Current __EsDirname:', __EsDirname);
// Current __EsDirname: D:\viki data\viki\node\NodeJs_playGround\moduleWiseStudy\fs

// function fileURLToPath(url: string | URL, options?: FileUrlToPathOptions): string

// This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.

// import { fileURLToPath } from 'node:url';

// const __filename = fileURLToPath(import.meta.url);

// new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
// fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)

// new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
// fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)

// new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
// fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

// new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
// fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
// @since — v10.12.0

// @param url — The file URL string or URL object to convert to a path.

// @return — The fully-resolved platform-specific Node.js file path.

// method second

// Get the current directory path
const currentDir = new URL('.', import.meta.url).pathname;
console.log('Current Directory currentDir:', currentDir);
// Current Directory currentDir: /D:/viki%20data/viki/node/NodeJs_playGround/moduleWiseStudy/fs/

// Explanation:
// new URL('.', import.meta.url): Constructs a URL representing the current directory by resolving . (current directory) against the file's URL.
// .pathname: Gives the file system path as a string.
// This approach is concise and avoids the need for importing the path module. However, if you need a fully normalized path on all operating systems (Windows, macOS, Linux), you can still use fileURLToPath:

//  third method
const currentDir1 = path.dirname(fileURLToPath(import.meta.url));
console.log('Current Directory currentDir1:', currentDir1);
// Current Directory currentDir1: D:\viki data\viki\node\NodeJs_playGround\moduleWiseStudy\fs

// The first method is simpler if you don't need compatibility adjustments for different OS environments!

///////////////////////////////////////////////////////// create a file asynchronously /////////////////////////////////////////////////

// writeFileSync(file: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: fs.WriteFileOptions): void
// writeFileSync also use for overright data in same file
const filepath = 'creatingtextfile.txt';
const filepath2 = '../creatingtextfile.txt';
// __dirname => __dirname is not defined in ES module scope or path.dirname() => gives absoulate path to current directory

const filepath3 = path.join(currentDir1, filepath); // joining two string in path.join , current dir path + filename
const data = 'utfycd csdcsdcdscd';

// syncronous
fs.writeFileSync(filepath3, data, { encoding: 'utf-8' }); // encode charater nearly all language and emoji and symbols
// asynchronous
fs.writeFile(filepath3, data, { encoding: 'utf-8' }, (error) => {
  if (error) {
    console.log('error', error);
  }
  console.log('not an error');
});
///////////////////////////////////////////////// Read data from a file //////////////////////////////////////////////////////////////////////////

// function readFileSync(path: fs.PathOrFileDescriptor, options?: {
//     encoding?: null | undefined;
//     flag?: string | undefined;
// } | null): Buffer (+2 overloads)

// Returns the contents of the path.

// For detailed information, see the documentation of the asynchronous version of this API: readFile.

// If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

// Similar to readFile, when the path is a directory, the behavior of fs.readFileSync() is platform-specific.

// import { readFileSync } from 'node:fs';

// // macOS, Linux, and Windows
// readFileSync('<directory>');
// // => [Error: EISDIR: illegal operation on a directory, read <directory>]

// //  FreeBSD
// readFileSync('<directory>'); // => <data>
// @since — v0.1.8

// @param path — filename or file descriptor

// synconous file system
const readfile = fs.readFileSync(filepath3);
console.log('reading file 1', readfile); //
// reading file <Buffer 75 74 66 79 63 64 20 63 73 64 63 73 64 63 64 73 63 64> // binery formet data

const readFile123 = fs.readFile(filepath3, 'utf-8', (err, data) => {
  if (err) {
    console.log('readFile error', err);
  } else {
    console.log('readFile data async', data);
  }
});

// convert this data into different fomat
console.log('reading file 234', readfile.toString());
// reading file utfycd csdcsdcdscd

const readfile2 = fs.readFileSync(filepath3, 'utf-8'); // no need to write tosrting ,, it will convert data in string
console.log('reading file utf', readfile2);
// reading file utfycd csdcsdcdscd

///////////////////////////////////////////////////// update data => addepnd  //////////////////////////////////////////////////////////////

// const addendData = fs.appendFileSync()

// appendFileSync(path: fs.PathOrFileDescriptor, data: string | Uint8Array, options?: fs.WriteFileOptions): void
// filename or file descriptor

// Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.

// The mode option only affects the newly created file. See open for more details.

// import { appendFileSync } from 'node:fs';

// try {
//   appendFileSync('message.txt', 'data to append');
//   console.log('The "data to append" was appended to file!');
// } catch (err) {
//   // Handle the error
// }
// If options is a string, then it specifies the encoding:

// import { appendFileSync } from 'node:fs';

// appendFileSync('message.txt', 'data to append', 'utf8');
// The path may be specified as a numeric file descriptor that has been opened for appending (using fs.open() or fs.openSync()). The file descriptor will not be closed automatically.

// import { openSync, closeSync, appendFileSync } from 'node:fs';

// let fd;

// try {
//   fd = openSync('message.txt', 'a');
//   appendFileSync(fd, 'data to append', 'utf8');
// } catch (err) {
//   // Handle the error
// } finally {
//   if (fd !== undefined)
//     closeSync(fd);
// }

const currentdir4 = path.dirname(fileURLToPath(import.meta.url));
const filepath5 = path.join(currentdir4, 'creatingtextfile.txt');
const addendData = fs.appendFileSync(filepath5, '\n creatingtextfile data appending to it'); // sync task
console.log('appendData', addendData);
const addendData1 = fs.appendFile(filepath5, '\n creatingtextfile data appending aync task to it'); //  async task

//////////////// remain the file ///////////////////
const curdir = path.dirname(fileURLToPath(import.meta.url));
const fielpath6 = path.join(curdir, 'creatingtextfile.txt');
const newName = 'updatecreatefile.txt';
const newfielpath6 = path.join(curdir, newName);

const remainfile = fs.renameSync(fielpath6, newfielpath6); // sync
const remainfile1 = fs.rename(fielpath6, newfielpath6); // async

//////////////////////////////////// delete the file ///////////////////////

const filepath6 = path.join(currentdir4, 'creatingtextfile.txt');
// const deleteFile = fs.unlinkSync(filepath6); // sync delete
const deleteFile = fs.unlink(filepath6); // async delete
// console.log('appendData', deleteFile);
