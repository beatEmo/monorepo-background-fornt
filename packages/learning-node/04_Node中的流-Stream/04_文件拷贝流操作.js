const fs = require("fs");

// 方式一
// fs.readFile("./a.txt", (err, data) => {
//   fs.writeFile("./fff.txt", data, (err, data) => {
//     console.log(data);
//   });
// });

// 方式二
// const readStream = fs.createReadStream("./a.txt");
// const writeStream = fs.createWriteStream("./f.txt");

// readStream.on("open", (data) => {
//   writeStream.write(data);
// });

// readStream.on("end", () => {
//   writeStream.close();
// });

// 方式三
const readStream = fs.createReadStream("./a.txt");
const writeStream = fs.createWriteStream("./f.txt");

readStream.pipe(writeStream);
