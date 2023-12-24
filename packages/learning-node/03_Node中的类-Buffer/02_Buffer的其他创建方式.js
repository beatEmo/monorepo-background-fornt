const fs = require("fs");

// 创建一个 Buffer 对象 ， 8字节大小的内存空间
const buf = Buffer.alloc(8);
console.log(buf); // 00 00 00 00 00 00 00 00

// 手动对每一个字节进行 访问
console.log(buf[0]); // 0

// 手动对每一个字节进行 操作
buf[0] = 100;
buf[1] = "中国".charCodeAt();
buf[2] = 0x64;

console.log(buf); // 64 2d 64 00 00 00 00 00
