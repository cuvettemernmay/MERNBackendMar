// const _ = require('lodash')
// const array = [1, 2, 3, 4]
// console.log(_.reverse(array))

// const fs = require("fs")

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if(err) {
//     console.error("Error reading file:" , err)
//     return
//   }
//   console.log("File Content:", data)
// })


const fs = require("fs").promises

fs.readFile("example.txt", "utf8")
  .then((data) => console.log("File Content:", data))
  .catch((error) => console.error("Error Reading File:", error));