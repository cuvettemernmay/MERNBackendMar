const http = require("http")


// GET Request

// http.get("http://jsonplaceholder.typicode.com/posts/1", (response) => {
//   let data = ""

//   response.on("data", (chunk) => {
//     data += chunk
//   })
//   response.on("end", () => {
//     console.log("Response:", JSON.parse(data))
//   })
// }).on("error", (err) => {
//   console.error("Error:", err)
// })

// POST Request (Client => send the data which is going to be stored DB)

// const postData = JSON.stringify({
//   title: "foo",
//   body: "bar",
//   userId: 1
// })

// const options = {
//   hostname: "jsonplaceholder.typicode.com",
//   port: 80,
//   path: "/posts",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": postData.length,
//   }
// }

// const req = http.request(options, (res) => {
//   console.log(`Status Code: ${res.statusCode}`)

//   let responseData = ""

//   res.on("data", (chunk) => {
//     responseData += chunk
//   })

//   res.on("end", () => {
//     console.log("POST Response:", JSON.parse(responseData))
//   })

// })

// req.on("error", (err) => {
//   console.error("Request Error:", err)
// })

// req.write(postData)
// req.end()