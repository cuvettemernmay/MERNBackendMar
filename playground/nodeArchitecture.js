const fs = require("fs")

// 1. You App - JS Code
console.log("Start reading file...")

// 2. Node.js Bindings pass this to libuv
fs.readFile("example.txt", "utf8", (err, data) => {
  // 4. Callback runs after OS finishes reading
  if (err) throw err;
  console.log("File Contents:", data)
})

// 3. Meanwhile, the Event Loop keep running
console.log("Doing other things while waiting...")