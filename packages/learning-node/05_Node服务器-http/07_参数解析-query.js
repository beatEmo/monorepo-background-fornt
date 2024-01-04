const http = require("http");
const url = require("url");
const qs = require("querystring");

const serve = http.createServer((req, res) => {
  // 1. query 类型参数
  // 1.1 解析url
  const urlString = req.url;
  const urlInfo = url.parse(urlString);
  console.log(urlInfo);
  // 1.2 解析 query a=a&b=0
  const queryString = urlInfo.query;
  const queryInfo = qs.parse(queryString);
  console.log(queryInfo.a, queryInfo.b);
});

serve.listen(3000, () => {
  console.log("服务器开启成功~");
});
