const { read } = require("fs");
const http = require("http");

http.createServer((req, res) => {

    
    res.write('hola mundo')
    res.end();
  })
  .listen(8080);

console.log("escucnado el puerto 8081");
