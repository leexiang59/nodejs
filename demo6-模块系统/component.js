/**
 * Created by willli on 2016/11/17.
 */
function person() {
    var name = 'tom';
    this.setName = function (n) {
        name = n;
    }
    this.getName = function () {
        return name;
    }
}
module.exports = person;
