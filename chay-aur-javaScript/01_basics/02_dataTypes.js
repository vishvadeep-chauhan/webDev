"use strict"; // treat all js code as newer version 

// alert(3 + 3)  // we are using node not browser 

let name = "vishv"
let age = 19
let isLengeth = false



const x = 3 + 3;
console.log("x =", x);


//  typeof playground
console.log("typeof 42:", typeof 42);                // "number"
console.log("typeof 42n:", typeof 42n);              // "bigint"
console.log('typeof "42":', typeof "42");            // "string"
console.log("typeof true:", typeof true);            // "boolean"
console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);            // "object" (historical bug)
console.log('typeof Symbol("id"):', typeof Symbol("id")); // "symbol"
console.log("typeof {}:", typeof {});                // "object"
console.log("typeof []:", typeof []);                // "object" (arrays are objects)
console.log("Array.isArray([]):", Array.isArray([]));     // true — correct array check
console.log("typeof function(){}:", typeof function(){}); // "function" (special case, still an object internally)
console.log("typeof (() => {}):", typeof (() => {}));     // "function"

// 9) Strict mode behavior: accidental global assignment throws
try {
  // In non-strict mode this would create a global variable. In strict mode it throws.
  rogue = 10; // ReferenceError in strict mode
  console.log("rogue =", rogue);
} catch (err) {
  console.log("Strict mode blocked undeclared assignment:", err.message);
}

// 10) Quick environment check (Node vs Browser)
if (typeof window === "undefined") {
  console.log("Environment: Node");
} else {
  console.log("Environment: Browser");
}
