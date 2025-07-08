// ? Middleware is a function that has access to the request object, response object, and the next function in the application's request-response cycle.
// Middleware can:
// ! 1. Execute any code.
// * 2. Make changes to the request and response objects.
// ? 3. End the request-response cycle.
// ! 4. Call the next middleware in the stack.

const express = require('express');
// const path = require('path');
// const morgan = require('morgan');
const session = require('express-session');
const app = express();


// Simple Middleware

// const myMiddleware = (req, res, next) => {
//   console.log('Middleware is running');
//   req.requestTime = new Date().toISOString();
//   next();
// }

// // Apply Middleware to all routes
// app.use(myMiddleware);

// app.get('/', (req, res) => {
//   res.send('Hello World at ' + req.requestTime);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



// const requestLogger = (req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   console.log("Headers", req.headers);
//   console.log("Body", req.body);
//   next();
// }

// app.use(requestLogger);

// app.get("/products", (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: "Product 1",
//       price: 100,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 200,
//     },
    
//   ]);
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// ? 1. express.json() - Parse JSON bodies in the request.
// ? app.use(express.json());

// 2. express.urlencoded() - Parse URL-encoded bodies in the request.
// app.use(express.urlencoded({ extended: true }));

// express.urlencoded() is a built-in middleware that parses URL-encoded data from incoming requests
// URL-encoded data format: key1=value1&key2=value2 (commonly used in HTML forms)
// Example URL with encoded data: /submit?username=john&password=1234

// How it works:
// 1. Processes data with Content-Type: application/x-www-form-urlencoded
// 2. Parses the query string or form data into a JavaScript object
// 3. Makes the parsed data available in req.body


// Example parsed output for "name=John+Doe&age=25":
// req.body = {
//   name: "John Doe",  // + becomes space
//   age: "25"         // All values are strings by default
// }

// Note: Always include this before routes that need to process form data


// 3. express.static() - Serve static files.
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json()); // Parse JSON bodies in the request.
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies in the request.
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files.

// app.post('/api/users', (req, res) => {
//   console.log(req.body);
//   res.json({ message: "user created successfully", data: req.body});
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// app.use(morgan('dev'));

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// Configure Session Middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
  },
}));

app.get('/', (req, res) => {
  if(req.session.views) {
    req.session.views++; // Increment the views count
    res.send(`You have viewed this page ${req.session.views} times`);
  } else {
    req.session.views = 1; // Initialize the views count
    res.send('Welcome to the page');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

