/**
 * Created by willli on 2016/11/15.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function () {
    console.log('监听器1')
}
var listener2 = function () {
    console.log('监听器2')
}
eventEmitter.on('listen',listener1);
eventEmitter.addListener('listen',listener2);

var listeners = events.EventEmitter.listenerCount(eventEmitter,'listen');
console.log('目前有'+listeners+'个监听器')

eventEmitter.emit('listen');

eventEmitter.removeListener('listen',listener1);
console.log('移除监听器1');

listeners = events.EventEmitter.listenerCount(eventEmitter,'listen');
console.log('目前有'+listeners+'个监听器')

eventEmitter.emit('listen');

console.log("程序执行完毕。");