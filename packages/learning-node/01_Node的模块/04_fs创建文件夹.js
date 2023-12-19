const fs = require("fs");

fs.mkdir(
  "./www",
  {
    recursive: false
  },
  (err, path) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(path);
  }
);
