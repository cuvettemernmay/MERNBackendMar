const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// Configure Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


// Define a route to render the index.pug file
// app.get('/', (req, res) => {
//   res.render('index', {
//     title: 'My E-commerce Website',
//     message: 'Welcome to our store!',
//     user: {
//       name: 'John Doe'
//     }
//   });
// });

app.get("/myWebsite", (req, res) => {
  res.render("layout", {
    title: "My Website",
    content: "This is the content of my website",
    footer: "This is the footer of my website"
  })
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


