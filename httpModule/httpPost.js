const http = require("http")

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/posts") {
    let body = ""

    req.on("data", (chunk) => {
      body += chunk
    })

    req.on("end", () => {
      try {
        const postData = JSON.parse(body)
        res.writeHead(201, { "Content-Type" : "application/json"} )
        res.end(JSON.stringify({
          status: "Success",
          data: {
            id: 101,
            ...postData
          }
        }))
      } catch(error) {
        res.writeHead(400, { "Content-Type" : "application/json"} )
        res.end(JSON.stringify({
          error: "Invalid JSON"
        }))
      }
    })
  } else {
    res.writeHead(404, { "Content-Type" : "application/json"} )
        res.end(JSON.stringify({
          error: "Not Found"
        }))
  }
})

const PORT = 3001

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})