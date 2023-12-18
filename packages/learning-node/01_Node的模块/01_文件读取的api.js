const fs = require("fs");

// 1. 同步读取文件
// const rs1 = fs.readFileSync("./abc.txt", {
//   encoding: "utf8"
// });
// console.log(rs1);

// 2. 异步回调
// fs.readFile("./abc.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log("发生错误");
//     return;
//   }
//   console.log(data);
// });

// 3. 异步Promise
fs.promises
  .readFile("./abc.txt", { encoding: "utf8" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
