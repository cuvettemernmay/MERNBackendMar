// const http = require("http")

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type" : "text/plain"})
//   res.end("Hello World from Node.js Server!\n")
// })

// server.listen(3000, () => {
//   console.log(`Server is running at http://localhost:3000/`)
// })

const http = require("http")

const server = http.createServer((req, res) => {
  console.log(`${req.url} and ${req.method}`)

  if(req.url === "/") {
    res.writeHead(200, { "Content-Type" : "text/html"})
    res.end("<h1>Home Page</h1>")
  }
  else if(req.url === "/about") {
    res.writeHead(200, { "Content-Type" : "text/html"})
    res.end("<h1>About Page</h1>")
  }
  else if(req.url === "/api/data") {
    res.writeHead(200, { "Content-Type" : "application/json"})
    res.end(JSON.stringify({ message: "API Data", value: 37 }))
  }
  else {
    res.writeHead(404, { "Content-Type" : "text/html"})
    res.end("<h1>404 Not Found</h1>")
  }
})

server.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000/`)
})

server.on("connection", (socket) => {
  console.log("New Connection established")
})

server.on("error", (err) => {
  console.log("Server Error:", err)
})
