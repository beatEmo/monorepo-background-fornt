const fs = require("fs");

const writeStream = fs.createWriteStream("./b.txt", {
  flag: "w",
  start: 5
});

writeStream.on("open", (fd) => {
  console.log("文件被打开", fd);
});

writeStream.write("wwww");
writeStream.write(" caocoacacoao");
writeStream.write("cccc", (err) => {
  console.log("写入完成", err);
});

writeStream.end("覅偶是机构开始跟随怕");

writeStream.on("finish", () => {
  console.log("文件写入完成了");
});

writeStream.on("close", () => {
  console.log("文件关闭了");
});
