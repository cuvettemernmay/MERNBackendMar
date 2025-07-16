const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch(err) {
    res.status(400).send(err.message)
  }
})

module.exports = router;