// Synchronous and Asynchronous

const fs = require("fs")
const fsPromises = require("fs").promises;

// Synchronous Operation

// try {
//   const data = fs.readFileSync("example.txt", "utf8")
//   console.log("Sync data:", data)
// } catch(error) {
//   console.error("Sync error:", error)
// }


// console.log("Helooooooooooo")


// Asynchronous Operation

// fs.readFile(".", "utf8", (err, data) => {
//   if(err) {
//     console.error("Async Error:", err)
//     return;
//   }
//   console.log("Async data:", data)
// })


// console.log("Helooooooooooo")

// Asynchronous Operation - Promise-based

// async function readFilePromise() {
//   try {
//     const data = await fsPromises.readFile("example.txt", "utf8")
//     console.log("Promise data:", data)
//   } catch (err) {
//     console.error("Promise error:", err)
//   }
// }

// readFilePromise()

// console.log("Helooooooooooo")


// Writing Files


fs.writeFile("/cuvette/path/newFile.txt", "Hello Everyone! Let's write something here!", "utf8", (err) => {
  if(err) throw err
  console.log("File written successfully.")
})

// const newContent = "My brother is my best friend; we do everything together."

// fs.appendFile("example.txt", newContent, (err) => {
//   if (err) {
//     console.error("Error appending to file:", err)
//     return
//   }
//   console.log("Content successfully appended to the file")
// } )

