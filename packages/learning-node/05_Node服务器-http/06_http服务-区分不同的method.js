const http = require("http");

const serve = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/login") {
    if (req.method === "POST") {
      res.end("Welcome to the login page");
    } else {
      res.end("不支持");
    }
  } else if (url === "/products") {
    res.end("Products");
  } else {
    res.end("err ");
  }
});

serve.listen(3000, () => {
  console.log("服务器开启成功~");
});
