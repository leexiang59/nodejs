/**
 * Created by willli on 2016/11/17.
 */
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.decompress.txt'))
console.log('解压完毕')