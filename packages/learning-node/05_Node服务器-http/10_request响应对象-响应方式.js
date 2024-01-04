const http = require("http");

const serve = http.createServer((req, res) => {
  res.write("dsdsdsd");
  res.write("大大大");
  res.end("hahaha");
});

serve.listen(3000, () => {
  console.log("服务器开启成功~");
});
