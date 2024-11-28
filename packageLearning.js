{
  "name": "nodejs_playground",
  "version": "1.0.0",
  "description": "playing with node js and its library",
  "main": "index.js",
  "type": "module", // "commonjs" => for require and old module.exports 
  "scripts": {
    "start": "node index.js",
    "server-start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "nodemon": "^3.0.2"
  }
}
