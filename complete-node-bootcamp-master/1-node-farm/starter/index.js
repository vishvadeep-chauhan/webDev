const fs = require("fs");

// const hello = "Hello World";

// console.log(hello);

// const textIn = fs.readFileSync( __dirname + "/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = ` this is what we know about ${textIn}.\n created on ${Date.now()}`;
// fs.writeFileSync(__dirname + "/txt/output.txt", textOut);

// console.log('file written!')


// const fs = require("fs");
// const textIn = fs.readFileSync('./txt/input.txt', 'utf8');

// console.log(textIn)

// const textOut = `this is what we know about ${textIn} .\n created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('file written');



// ----------------------------------------------- non blocking asynchronously --



fs.readFile('./txt/start.txt', 'utf8', (err , data1) => {

   fs.readFile(`./txt/${data1}.txt`, 'utf8', (err , data2) => {
    console.log(data2);

    fs.readFile('./txt/append.txt', 'utf8', (err , data3) => {
    console.log(data3);

    fs.writeFile('./txt/final.txt', `${data1} \n ${data2}`, 'utf8', err => {
        console.log('your file has been written')

    })
})
})
})
console.log('will read file');