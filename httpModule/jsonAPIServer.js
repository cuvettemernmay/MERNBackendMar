const http = require("http")

// Sample Data
const products = [
  { id: 1, name: "Laptop", price: 999.9 },
  { id: 2, name: "Desktop", price: 899.9 },
  { id: 3, name: "Mobile", price: 699.9 },
  { id: 4, name: "Tablet", price: 799.9 },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "www.blah.com")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")


  if(req.method === "GET" && req.url === "/api/products") {
    res.writeHead(200, { "Content-Type" : "application/json" })
    res.end(JSON.stringify({
      success: true,
      data: products,
      timeStamp: new Date().toISOString()
      })
    )
  } else if(req.method === "GET" && req.url.startsWith("/api/products/")) {
    const urlParts = req.url.split("/") // ["", "api", 'products', 2]
    const productId = parseInt(urlParts[3])
    const product = products.find(product => product.id === productId)

    if(product) {
      res.writeHead(200, { "Content-Type" : "application/json" })
      res.end(JSON.stringify({
      success: true,
      data: product,
      }))
    } else {
      res.writeHead(404, { "Content-Type" : "application/json" })
      res.end(JSON.stringify({
      success: false,
      message: "Product not found",
      }))
    }
  }
})

server.listen(3002, () => {
  console.log("JSON API Server is running on PORT 3002")
})