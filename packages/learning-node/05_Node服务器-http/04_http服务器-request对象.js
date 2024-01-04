const http = require("http");

const serve = http.createServer((req, res) => {
  // request对象
  // 1. 获取url信息
  console.log(req.url);
  // 2. 获取请求方式
  console.log(req.method);
  // 3. 获取请求头
  console.log(req.headers);

  res.end("hello world");
});

serve.listen(3000, () => {
  console.log("服务器开启成功~");
});
