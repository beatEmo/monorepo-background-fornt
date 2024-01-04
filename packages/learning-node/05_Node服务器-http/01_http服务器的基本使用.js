const http = require("http");

// 创建一个http服务器
const serve = http.createServer((request, response) => {
  // request 包含本次用户请求的所有信息
  // 请求的url
  // 请求的method
  // 请求的headers
  // 请求携带的数据
  // console.log(request);
  // response 用于给用户返回结果
  response.end("hello");
});

// 开启服务器, 并告知需要监听的端口
serve.listen(3000, () => {
  console.log("listening on port 3000~");
});
