const { log, error } = require("console");
const fs = require("fs");

// 1. 读取文件夹 结果以字符串给出
// fs.readdir("./aaa", (err, files) => {
//   console.log(files);
// });

// 2. 读取文件夹 获取文件夹的信息
// fs.readdir("./www", { withFileTypes: true }, (err, files) => {
//   files.forEach((file) => {
//     if (file.isDirectory()) {
//       console.log(file, "是一个文件夹");

//       fs.readdir(`./www/${file.name}`, (err, files) => {
//         console.log(files);
//       });
//     } else {
//       console.log(file, "是一个文件");
//     }
//   });
// });

// 递归读取文件中所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        readDirectory(`${path}/${file.name}`);
      } else {
        console.log("文件名为：", file.name);
      }
    });
  });
}
readDirectory("./www");
