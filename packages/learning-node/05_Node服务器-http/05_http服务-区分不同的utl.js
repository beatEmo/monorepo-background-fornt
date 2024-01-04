const http = require("http");

const serve = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/login") {
    res.end("Welcome to the login page");
  } else if (url === "/products") {
    res.end("Products");
  } else {
    res.end("err ");
  }
});

serve.listen(3000, () => {
  console.log("服务器开启成功~");
});
