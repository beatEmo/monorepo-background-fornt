const fs = require("fs");
// 创建 Buffer -- 不推荐
// const buf = new Buffer("hello");
// console.log(buf);

// 创建Buffer -- 推荐
// const buf = Buffer.from("world");
// console.log(buf); // 77 6f 72 6c 64

// 创建中文的buffer
// const buf = Buffer.from("世界");
// console.log(buf); // e4 b8 96 e7 95 8c

// 将 buffer 转化为 具体文字
const buf = Buffer.from("世界");
console.log(buf);
console.log(buf.toString());

// 编码和解码格式不同时 -> 乱码
const buf = Buffer.from("世界");
console.log(buf);
console.log(buf.toString("utf16le"));
