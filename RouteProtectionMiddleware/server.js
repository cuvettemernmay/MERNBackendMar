const express = require("express");
const app = express();
const port = 3005;
const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());

// Routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

