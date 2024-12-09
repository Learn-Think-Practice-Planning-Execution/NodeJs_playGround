import fs from 'fs';
import { fileURLToPath } from 'url';
import fsPromise from 'fs/promises';
import path from 'path';

const currentdir = path.dirname(fileURLToPath(import.meta.url));

export default const requestHandlerFunction = (req, res) => {
  console.log('req', req.url, req.method, req.headers);

  const url = req.url;
  const method = req.method;
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>this is my first page</title></head>');
    res.write(
      '<body> <h1>this is body</h1><br><form action="/contactus" method="POST"><input name="message" type="text" ><br> <button type="submit">send request</button></form></body'
    );
    res.write('</html>');
    return res.end();
  } else if (req.url == '/about' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>this is my first page</title></head>');
    res.write('<body> <h1>this is body about page</h1></body');
    res.write('</html>');
    res.end();
  } else if (req.url == '/contactus' && method === 'POST') {
    // parsing request body
    const body_data_parsing = [];
    req.on('data', (chunks) => {
      console.log('chunks', chunks);
      body_data_parsing.push(chunks);
    });

    return req.on('end', () => {
      //         (method) BufferConstructor.concat(list: readonly Uint8Array[], totalLength?: number): Buffer
      // Returns a new Buffer which is the result of concatenating all the Buffer instances in the list together.

      // If the list has no items, or if the totalLength is 0, then a new zero-length Buffer is returned.

      // If totalLength is not provided, it is calculated from the Buffer instances in list by adding their lengths.

      // If totalLength is provided, it is coerced to an unsigned integer. If the combined length of the Buffers in list exceeds totalLength, the result is truncated to totalLength.

      // import { Buffer } from 'node:buffer';

      // // Create a single `Buffer` from a list of three `Buffer` instances.

      // const buf1 = Buffer.alloc(10);
      // const buf2 = Buffer.alloc(14);
      // const buf3 = Buffer.alloc(18);
      // const totalLength = buf1.length + buf2.length + buf3.length;

      // console.log(totalLength);
      // // Prints: 42

      // const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

      // console.log(bufA);
      // // Prints: <Buffer 00 00 00 00 ...>
      // console.log(bufA.length);
      // // Prints: 42
      // Buffer.concat() may also use the internal Buffer pool like Buffer.allocUnsafe() does.

      // @since — v0.7.11

      // @param list — List of Buffer or Uint8Array instances to concatenate.

      // @param totalLength — Total length of the Buffer instances in list when concatenated.
      const parsedbody = Buffer.concat(body_data_parsing).toString();
      console.log('buffer', parsedbody);
      const messageValue = parsedbody.split('=')[1];
      const filePath = path.join(currentdir, 'contactus.txt');
      //   fs.writeFileSync(filePath, messageValue, 'utf-8'); // block the next line execution  ,, use sync when needed
      fs.writeFile(filePath, messageValue, 'utf-8', (error) => {
        console.log('error', error);
        if (error) {
          console.log('error', error);
          res.statusCode = 400;
          res.write({
            error
          });
        } else {
          res.statusCode = 200;
          res.setHeader('Location', '/');
          res.end();
        }
      }); // block the next line execution  ,, use sync when needed

      // according to dependances , move below code excution order
      //   req.statusCode = 200;
      //   req.setHeader('Location', '/');
      //   res.end();
    });
    // req.statusCode = 200;
    // req.setHeader('Location', '/');
    //  res.end();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>this is my last page</title></head>');
    res.write('<body> <h1>this is about us page  about page</h1></body');
    res.write('</html>');
    res.end();
  }

  // res.write('</html>');  // after end res ,, do't write or change it will throw an error
  // do't
  //   process.exit(); // it will end the process with a status  code // stop the node server
};
