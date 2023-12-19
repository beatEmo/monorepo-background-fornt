const fs = require("fs");

// 1. 文件夹重命名
// fs.rename("./www", "./aaa", (err) => {
//   console.log(err);
// });

// 2. 文件重命名
fs.rename("./ccc.txt", "./cc1.txt", (err) => {
  console.log(err);
});
