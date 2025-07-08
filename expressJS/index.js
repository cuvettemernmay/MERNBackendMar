// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// Example - 2

// REST (Representational State Transfer) - Restful APIs means that the API is designed to be used by machines, not humans.
// 1. Client-Server Architecture
// 2. Stateless, 
// 3. Cacheable, 
// 4. Layered System, 
// 5. Code on Demand (optional), 
// 6. Uniform Interface, 

// CRUD - Get, Post, Put, Delete

// GET - Read Resource
// POST - Create Resource
// PUT - Update Resource
// DELETE - Delete Resource


const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URLink = process.env.DB_URL || 'mongodb://localhost:27017/expressjs';
const API_KEYYY = process.env.API_KEY || '1234567890';

// Middleware - Parse JSON bodies in the request
app.use(express.json());

// Simple in-memory database

let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
  { id: 4, name: 'Product 4', price: 400 },
  { id: 5, name: 'Product 5', price: 500 },
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET a single product
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST a new product
app.post('/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
  res.send('Product created successfully');
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


