// const bcrypt = require("bcryptjs");

// // function to hash a password
// const hashPassword = async (password) => {
//     try {
//         const salt = await bcrypt.genSalt(10); // 10 is the number of salt rounds (cost factor). 
//         // For example, with 10 rounds: 
//         // 1. Password "user123" gets combined with random salt
//         // 2. Hashed 2^10 (1024) times using bcrypt's algorithm
//         // 3. Produces final hash like "$2a$10$N9qo8uLOickgx2ZMRZoMy...rj4C"
//         // Higher rounds = more secure but slower computation
//         console.log(salt)
//         const hashedPassword = await bcrypt.hash(password, salt);
//         console.log(hashedPassword)
//     } catch(error) {
//         throw new Error("Error hashing password", error)
//     }
// }

// const plainPassword = "user123";
// hashPassword(plainPassword);


const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://cuvettemernmay:a1BahSufD83XIaTb@backendmerndb.lihanud.mongodb.net/?retryWrites=true&w=majority&appName=BackendMERNDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Database");
}).catch((err) => {
  console.log(err);
});

// Routes
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Basic Route

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});