const fs = require("fs");

// 传统的读取文件方式
// 缺点一：没法控制从哪读取，读取到什么位置
// 缺点二：没法做到读取到一个位置暂停读取，然后恢复读取
// 缺点三：文件非常大的时候，多次读取
// fs.readFile("./a.txt", (err, data) => {
//   console.log(data);
// });

// 通过流读取文件
const readStream = fs.createReadStream("./a.txt", {
  start: 8,
  end: 20,
  highWaterMark: 3
});
readStream.on("data", (data) => {
  console.log(data.toString("utf8"));

  readStream.pause();

  setTimeout(() => {
    readStream.resume();
  }, 2000);
});
