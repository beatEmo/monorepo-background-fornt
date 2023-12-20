// events 模块中的事件总线
const EventEmitter = require("events");

// 创建EventEmitter实例
const emitter = new EventEmitter();

// 监听事件
emitter.on("hhh", () => {
  console.log("我被触发了");
});

// 发射事件
setTimeout(() => {
  emitter.emit("hhh");
}, 1000);
