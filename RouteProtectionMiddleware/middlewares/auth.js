const isAuthenticated = (req, res, next) => {
  // const authHeader = req.headers.authorization;
  req.isAuthenticated = true;

  if(req.isAuthenticated) {
    return next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = isAuthenticated;