const fs = require("fs");

// 通过流读取文件
const readStream = fs.createReadStream("./a.txt", {
  start: 8,
  end: 20,
  highWaterMark: 3
});

// 2. 监听读取到的数据
readStream.on("data", (data) => {
  console.log(data.toString("utf8"));
});

// 3. 其他的事件
readStream.on("open", (fd) => {
  console.log("文件打开了", fd);
});

readStream.on("close", () => {
  console.log("文件被关闭了");
});
