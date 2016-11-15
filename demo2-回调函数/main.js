/**
 * Created by willli on 2016/11/15.
 */
//阻塞示例
var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束！");

console.log("------------------------------------");

//非阻塞示例
fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString())
});
console.log("程序执行结束！")