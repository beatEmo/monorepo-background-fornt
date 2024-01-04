const http = require("http");

const serve = http.createServer((req, res) => {
  // 获取 body 参数
  // 设置 request中数据的编码格式
  // req.setEncoding("utf8");

  let isLogin = false;
  console.log(req.headers);
  // request对象本质上是一个readable可读流
  req.on("data", (data) => {
    console.log(data);
    const dataString = data;
    const dataInfo = JSON.parse(dataString);

    if (dataInfo.name === "www" && dataInfo.pas === "123") {
      isLogin = true;
    } else {
      isLogin = false;
    }
  });

  req.on("end", () => {
    if (isLogin) {
      res.end("登录成功");
    } else {
      res.end("用户名密码错误");
    }
  });
});

serve.listen(3000, () => {
  console.log("服务器开启成功~");
});
