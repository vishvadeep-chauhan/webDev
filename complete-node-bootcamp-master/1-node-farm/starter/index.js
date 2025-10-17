const fs = require("fs");

const hello = "Hello World";

console.log(hello);

const textIn = fs.readFileSync( __dirname + "/txt/input.txt", "utf-8");
console.log(textIn);

const textOut = ` this is what we know about ${textIn}.\n created on ${Date.now()}`;
fs.writeFileSync(__dirname + "/txt/output.txt", textOut);

console.log('file written!')

