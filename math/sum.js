// Modules protect their variables and functions from leaking, so user need to export them manually
console.log("Sum module executed");
var text = 10;

function sumNum (a, b) {
  console.log(a+b);
}

module.exports.sumNum = sumNum;
module.exports.text = text;