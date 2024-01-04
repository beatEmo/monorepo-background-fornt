const http = require("http");

const serve1 = http.createServer((request, response) => {
  response.end("2000 hello");
});
serve1.listen(2000, () => {
  console.log("listening on port 2000~");
});

const serve2 = http.createServer((request, response) => {
  response.end("3000 hello");
});
serve2.listen(3000, () => {
  console.log("listening on port 3000~");
});
