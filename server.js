// const { log } = require("console");

console.log("Hi Hello");
console.log("Welcome to Node JS");

console.log("---->");

const os = require("os");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log("---->");

console.log(__dirname);
console.log(__filename);

console.log("---->");

const path = require("path");
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log("---->");

const { add, sub, mul, div, mod } = require("./math");

console.log(`Addition ${add(5, 8)}`);
console.log(`Subtraction ${sub(8, 5)}`);
console.log(`Multiplication ${mul(3, 3)}`);
console.log(`Division ${div(25, 5)}`);
console.log(`Modulo ${mod(7, 8)}`);

console.log("---->");
