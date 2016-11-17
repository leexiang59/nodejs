/**
 * Created by willli on 2016/11/17.
 */
var data = '我output中的内容';
var fs = require('fs');
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
writeStream.end();

writeStream.on('finish',function () {
    console.log('写入完成');
});
writeStream.on('error',function (err) {
    console.log(err.stack)
})