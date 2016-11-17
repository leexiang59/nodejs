/**
 * Created by willli on 2016/11/17.
 */
var data = '';
var fs = require('fs');
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');
readStream.on('data',function (text) {
    data+=text;
    console.log(text)
});
readStream.on('end',function () {
    console.log(data);
});
readStream.on('error',function (err) {
    console.log(err.stack)
});