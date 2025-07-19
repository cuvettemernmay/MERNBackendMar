const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const PORT = 3000;

const app = express();

app.use(express.json());

const users = [
  {
    "id": 1,
    "username": "user1",
    "password": "$2b$10$I/gO98fJsZsqgS97UQ1lW./Y65RRqfRAxq7s8901aGThX8tpz73ba",
    "role": "user"
}
];

const JWT_SECRET = "secret";


// User Registration Route
// POST /register - Create a new user
app.post("/register", async (req, res) => {
  try {
    const { username, password, role = "user" } = req.body;

    if(users.some(user => user.name === username)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { id: users.length + 1, username, password: hashedPassword, role };

    users.push(user);

    res.status(201).json({ message: "User registered successfully", user });

  } catch(err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

// User Login Route and get JWT token
// POST /login - Login into an existing user
app.post("/login", async(req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);

  if(!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if(!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create a JWT token
  const token = jwt.sign(
    {username: user.username, role: user.role}, // payload
    JWT_SECRET,
    {expiresIn: "1h"}
  )

  res.json({ token });
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})