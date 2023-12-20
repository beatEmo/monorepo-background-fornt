const EventEmitter = require("events");

const ee = new EventEmitter();

// 1. 只监听一次www事件
ee.once("www", () => {
  console.log("被触发了了了");
});

// ee.emit("www");
// ee.emit("www");
// ee.emit("www");

// 2. 将监听事件添加在最前面
ee.prependListener("www", () => {
  console.log("我是老大");
});

// ee.emit("www");

// 3. 将监听事件添加在最前面，但只监听一次
ee.prependOnceListener("www", () => {
  console.log("嘿嘿傻了吧唧");
});

// ee.emit("www");
// ee.emit("www");

// 4. 移除所有监听器
ee.removeAllListeners();
ee.removeAllListeners("www");
