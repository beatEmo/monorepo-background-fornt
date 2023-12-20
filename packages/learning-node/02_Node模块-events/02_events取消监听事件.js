// events 模块中的事件总线
const EventEmitter = require("events");

// 创建EventEmitter实例
const emitter = new EventEmitter();

function handleEmiter() {
  console.log("我被触发了");
}

// 监听事件
emitter.on("hhh", handleEmiter);

// 发射事件
setTimeout(() => {
  emitter.emit("hhh");

  // 取消事件监听
  emitter.off("hhh", handleEmiter);

  setTimeout(() => {
    emitter.emit("hhh");
  }, 500);
}, 1000);
