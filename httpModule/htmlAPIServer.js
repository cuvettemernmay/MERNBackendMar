const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {

  if(req.url === "/" || req.url === '/index.html') {
    serveStaticFile('index.html', res)
  } else if(req.url === "/about" || req.url === '/about.html') {
    serveStaticFile('about.html', res)
  }
})

function serveStaticFile(filename, res) {
  const filePath = path.join(__dirname, "public", filename);
  console.log(filePath)
  fs.readFile(filePath, (err, data) => {
    if(err) {
      res.writeHead(404, {"Content-Type": "text/html"})
      res.end('<h1>404 Not Found</h1>')
    } else {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(data)
    }
  })
}

server.listen(3000, () => {
  console.log("JSON API Server is running on PORT 3000")
})