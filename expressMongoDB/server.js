const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect("mongodb+srv://cuvettemernmay:a1BahSufD83XIaTb@backendmerndb.lihanud.mongodb.net/?retryWrites=true&w=majority&appName=BackendMERNDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Database");
}).catch((err) => {
  console.log(err);
});

app.use("/users", userRoutes);

// Basic Route

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

