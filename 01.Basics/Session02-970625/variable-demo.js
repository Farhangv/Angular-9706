var firstname = "John";
var lastname = "Doe";
var ladder = {
    material: "wood",
    length: 5
};
function getTotalLength(x, y) {
    //return x.length;
    var total = x.length + y.length;
    return total;
}
getTotalLength("John", ladder);
var age = 20;
//age = "david";
function getAge(birthYear) {
    return Date.now() - birthYear;
}
function getTotalLength2(x, y) {
    //let total = x.length + y.length;
    if (x instanceof Array) {
        x.push(20);
    }
    if (typeof y === 'string') {
        y.substr(1);
    }
    var total = x.length + y.length;
    return total;
}
//# sourceMappingURL=variable-demo.js.map