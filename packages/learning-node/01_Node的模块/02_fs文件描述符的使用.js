const fs = require("fs");

// 打开一个文件
fs.open("./aaa.txt", (err, fd) => {
  if (err) {
    console.log(err);
  }

  // 1. 得到文件描述符
  console.log(fd);

  // 2. 读取文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) {
      console.log(err);
    }

    // 读取文件基本信息
    console.log(stats);

    // 3. 手动关闭已打开文件
    fs.close(fd);
  });
});
