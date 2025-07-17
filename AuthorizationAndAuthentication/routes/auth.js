const express = require("express");
const bcrypt = require("bcryptjs");
const AuthUser = require("../models/AuthUser");
const router = express.Router();

// Input Validation Middleware
const validateRegisterInput = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 8) {  
    return res.status(400).json({ message: "Password must be at least 8 characters long" });
  }
  next();
}

router.post("/register", validateRegisterInput, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await AuthUser.findOne({ $or: [{username}, {email}]});
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", field: existingUser.email === email ? "email" : "username" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new AuthUser({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    const userResponse = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt,
    }

    res.status(201).json({ message: "User registered successfully", user: userResponse });
    
    
    
  } catch(error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
})

module.exports = router;

