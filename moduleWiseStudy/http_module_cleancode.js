import http from 'http';
import routes from './routes.js';

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
const server = http.createServer(routes);

const port = 4000;
server.listen(port, () => {
  console.log('listening on ', port);
});
