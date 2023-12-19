const fs = require("fs");

const context = "Hello World, my name is www";

fs.writeFile(
  "./ccc.txt",
  context,
  {
    encoding: "utf8",
    flag: "a"
  },
  (err) => {
    if (err) {
      console.log("文件写入错误", err);
    } else {
      console.log("文件写入成功");
    }
  }
);
