// 1. Core Modules - fs, http, path, etc.
// 2. Local Modules - your own files
// 3. Third-party Modules - modules installed via npm

const path = require("path")

const fullPath = path.join(__dirname, "files", "test.pdf")
console.log(fullPath)

const ext = path.extname(fullPath)
console.log(ext);


// Custom Modules

function privateFunc() {
  console.log("this is private")
  return 12
}

function greet(name) {
  return `Good Morning, ${name}`
}

function product(a, b) {
  return a * b
}


module.exports = {
  greet,
  product,
  privateFunc
}

// exports.add = add;
// exports.greet = greet;
