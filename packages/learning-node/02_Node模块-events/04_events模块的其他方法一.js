const EventEmitter = require("events");

const ee = new EventEmitter();

ee.on("www", () => {});
ee.on("www", () => {});
ee.on("www", () => {});
ee.on("www", () => {});

ee.on("abc", () => {});
ee.on("abc", () => {});

// 1. 获得所有监听对象的名称
console.log(ee.eventNames());

// 2. 获取最大的监听器个数
console.log(ee.getMaxListeners());

// 3. 获取某个事件对应监听器的个数
console.log(ee.listenerCount("www"));

// 4. 获取某个事件对应所有监听器
console.log(ee.listeners("abc"));
