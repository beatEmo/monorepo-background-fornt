const fs = require("fs");

// 从文件中读取 Buffer
fs.readFile("./aaa.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
});

fs.readFile("./aaa.txt", (err, data) => {
  console.log(data);
});

fs.readFile("./aaa.txt", (err, data) => {
  data[0] = 100;
  console.log(data.toString());
});
