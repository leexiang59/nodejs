/**
 * Created by willli on 2016/11/15.
 */
var buf1 = new Buffer(10);
console.log(buf1);

var buf2 = new Buffer([10,20,30,40,50]);
console.log(buf2)

var buf3 = new Buffer("www.runoob.com", "utf-8");
console.log(buf3)

//写入缓冲区
var bufWrite = new Buffer(20);
var len = bufWrite.write('www.baidu.com');
console.log('写入缓存：',len,bufWrite)

//读取缓冲区
var bufRead = bufWrite.toString('utf8',3,10);
console.log('读出缓存：',bufRead)

//将buffer转为JSON
var bufJSON = Buffer('www.baidu.com');
var json = bufJSON.toJSON(bufJSON)
console.log('将buffer转为JSON:',json);
var json2buf = new Buffer(json.data);
console.log('还原json中的内容：',json2buf.toString())

//缓冲区合并
var bufCont1 = new Buffer('will');
var bufCont2 = new Buffer('-li');
var bufCont3 = new Buffer(' ,李想');
var bufConcat = Buffer.concat([bufCont1,bufCont2,bufCont3]);
console.log('缓冲区合并:',bufConcat.toString())

//缓冲区比较
//长度不同时，调换对比顺序，结果相反。
//相同时，返回0
var bufCom1 = new Buffer('gaopingping');
var bufCom2 = new Buffer('gaoping');
var bufCom3 = new Buffer('gao');
var bufCom4 = new Buffer('ping');
var bufCom5 = new Buffer('will');
var bufCom6 = new Buffer('gao2');
var bufCom7 = new Buffer('2');
console.log('缓冲区比较：');
console.log('gaopingping - gaopingping  ',bufCom1.compare(bufCom1));
console.log('gaoping - gaopingping  ',bufCom2.compare(bufCom1));
console.log('gao - gaopingping  ',bufCom3.compare(bufCom1));
console.log('ping - gaopingping  ',bufCom4.compare(bufCom1));
console.log('will - gaopingping  ',bufCom5.compare(bufCom1));
console.log('gao2 - gaopingping  ',bufCom6.compare(bufCom1));
console.log('gao2 - 2  ',bufCom6.compare(bufCom7));

//缓冲区拷贝
var bufCopy1 = new Buffer('拷贝的内容','utf-8');
var bufCopy2 = new Buffer(bufCopy1.length);
var copy = bufCopy1.copy(bufCopy2);
console.log(copy,bufCopy2.toString())

//缓冲区裁剪
var bufSlice = new Buffer('裁剪的内容');
console.log(bufSlice.length,bufSlice.slice(0,6).toString())




















