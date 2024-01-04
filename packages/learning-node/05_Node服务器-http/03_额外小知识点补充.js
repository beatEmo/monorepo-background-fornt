const http = require("http");

const serve = http.createServer((req, res) => {
  console.log("服务器被访问");

  res.end("hello world");
});

server.listen(3000, () => {});
