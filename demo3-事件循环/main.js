/**
 * Created by willli on 2016/11/15.
 */
//1.引入event模块
var events = require('events');

//2.创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//定义处理事件
var connectHandle = function () {
    console.log('连接成功');

    //触发其他事件
    eventEmitter.emit('test1');
    eventEmitter.emit('test2');
    eventEmitter.emit('test3');
}
//使用匿名函数绑定测试事件
eventEmitter.on('test1', function(){
    console.log('test1');
});
eventEmitter.on('test2', function(){
    console.log('test2');
});
eventEmitter.on('test3', function(){
    console.log('test3');
});

//3.绑定事件处理程序
eventEmitter.on('connect',connectHandle);

//4.触发事件
eventEmitter.emit('connect');



