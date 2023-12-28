const fs = require("fs");

const writeStream = fs.createWriteStream("./a.txt", {
  // windows上面有兼容问题 要用r+ 配合start使用
  flags: "r+",
  start: 5
});

writeStream.write("my file is open");
writeStream.close();
