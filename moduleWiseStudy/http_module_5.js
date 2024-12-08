import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import fsPromise from 'fs/promises';
import path from 'path';

const currentdir = path.dirname(fileURLToPath(import.meta.url));

// function
const requestListener = (req, res) => {
  console.log('req', req.url, req.method, req.headers);

  if (req.url) res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>this is my first page</title></head>');
  res.write('<body> <h1>this is body</h1></body');
  res.write('</html>');
  return res.end();
  // res.write('</html>');  // after end res ,, do't write or change it will throw an error
  // do't
  //   process.exit(); // it will end the process with a status  code // stop the node server
};

// create server
// const server = http.createServer(requestListener);
const server = http.createServer((req, res) => {
  console.log('req', req.url, req.method, req.headers);

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
      const parsedbody = Buffer.concat(body_data_parsing).toString();
      console.log('buffer', parsedbody);
      const messageValue = parsedbody.split('=')[1];
      const filePath = path.join(currentdir, 'contactus.txt');
      //   fs.writeFileSync(filePath, messageValue, 'utf-8'); // block the next line execution  ,, use sync when needed
      fs.writeFile(filePath, messageValue, 'utf-8', (error) => {
        console.log('error', error);
        if (error) {
          console.log('error', error);
          req.statusCode = 400;
          req.write({
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
});

const port = 4000;
server.listen(port, () => {
  console.log('listening on ', port);
});
