import path from 'path'; // ES module
// const path = require("path"); // commonjs

// console.log('path', path);

// result

// path <ref *1> {
//     resolve: [Function: resolve],
//     normalize: [Function: normalize],
//     isAbsolute: [Function: isAbsolute],
//     join: [Function: join],
//     relative: [Function: relative],
//     toNamespacedPath: [Function: toNamespacedPath],
//     dirname: [Function: dirname],
//     basename: [Function: basename],
//     extname: [Function: extname],
//     format: [Function: bound _format],
//     parse: [Function: parse],
//     sep: '\\',
//     delimiter: ';',
//     win32: [Circular *1],
//     posix: <ref *2> {
//       resolve: [Function: resolve],
//       normalize: [Function: normalize],
//       isAbsolute: [Function: isAbsolute],
//       join: [Function: join],
//       relative: [Function: relative],
//       toNamespacedPath: [Function: toNamespacedPath],
//       dirname: [Function: dirname],
//       basename: [Function: basename],
//       extname: [Function: extname],
//       format: [Function: bound _format],
//       parse: [Function: parse],
//       sep: '/',
//       delimiter: ':',
//       win32: [Circular *1],
//       posix: [Circular *2],
//       _makeLong: [Function: toNamespacedPath]
//     },
//     _makeLong: [Function: toNamespacedPath]
//   }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// use double _ _  ,, for path valiable

// 1=> __dirname ,, path.dirname  =>  Returns the directory part of a path
// console.log('dir', __dirname); // in commonjs => replace type="commonjs" in package.json to use commonjs (old version);
const filepath1 = './nodeBasic_1.js';
const filepath2 = 'D:\viki data\viki\nodeNodeJs_playGroundmoduleWiseStudy\nodeBasic_1.js'; // windows path type \
//
//  error in above line ,, \ => backslash  in javascript is for \n=> new line , \v vertialtab
// to solve this issue use forward slash /  => const filepath2 =  'D:/viki data/viki/nodeNodeJs_playGround/moduleWiseStudy/nodeBasic_1.js';
// jhugad => double backword slash // const filepath2 = 'D:\\viki data\\viki\\nodeNodeJs_playGround\\moduleWiseStudy\\nodeBasic_1.js';
// const filepath3 = '../nodeBasic_1.js'; // linux path type /
const filepath4 = 'D:/viki data/viki/nodeNodeJs_playGround/moduleWiseStudy/nodeBasic_1.js';
console.log('dir', path.dirname(filepath4));
console.log('fielname', path.basename(filepath4));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// path.join() =>Joins multiple path segments into one, using the appropriate separator (\ on Windows, / on Linux/macOS).
console.log('join', path.join('folder', 'study', 'data.json')); // it will join path base on, you are usinng  windows  or linus)

const filePath = path.join('folder', 'students', 'data.txt');
console.log(filePath);

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
const separator = path.sep;

console.log({ parseData, resolvedPath, extname, basename, dirname, separator });

// result
// backslash is because single slash is escape charater and whille json.stringif in object it will use // double backslash

// {
//     parseData: {
//       root: '',
//       dir: 'folder\\students',
//       base: 'data.txt',
//       ext: '.txt',
//       name: 'data'
//     },
//     resolvedPath: 'D:\\viki data\\viki\\node\\NodeJs_playGround\\moduleWiseStudy\\folder\\students\\data.txt',
//     extname: '.txt',
//     basename: 'data.txt',
//     dirname: 'folder\\students',
//     separator: '\\'
//   }
