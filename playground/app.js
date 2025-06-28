// import math from "./math"
const math = require("./math");
const moduless = require("./theModules")
const fs = require("fs");


console.log(moduless.greet("Sweta"))
console.log(moduless.product(10, 5))
console.log(moduless.privateFunc())

// console.log(math.add(23, 7));
// console.log(math.subtract(23, 7));

// console.log("Hello, Node.js!");

// function greet(name) {
//   return `Hello, ${name}`;
// }

// console.log(greet("MERN Students"));

// Read a file
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Write a File
// fs.writeFile("example.txt", "Hello Everyone, Let's try learning Node Js. You must be good at JavaScript for Node.js", (err) => {
//   if (err) throw err;
//   console.log("File Written Successfully!")
// })
