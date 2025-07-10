const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises;
const PORT = 3003;

app.use(express.json());
const dataPath = path.join(__dirname, 'data');
console.log(dataPath);
// const products = require('./data/products.json');
// const orders = require('./data/orders.json');


// Helper fuctions to read and write to the JSON files

async function readData(file) {
  const data = await fs.readFile(path.join(dataPath, file), 'utf8');
  return JSON.parse(data);
}

async function writeData(file, data) {
  await fs.writeFile(path.join(dataPath, file), JSON.stringify(data, null, 2), 'utf8');
}


// Get all products
app.get('/myProducts', async (req, res) => {
  const products = await readData('products.json');
  res.json(products);
});

// Get a single product by ID
app.get('/myProducts/:id', async (req, res) => {
  const products = await readData('products.json');
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Create a new product

app.post('/orders', async (req, res) => {
  const { productId, quantity } = req.body;

  const products = await readData('products.json');
  const orders = await readData('orders.json');

  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const newOrder = {
    id: orders.length + 1,
    productId,
    quantity,
    totalPrice: product.price * quantity,
    orderDate: new Date().toISOString()
  }

  orders.push(newOrder);
  await writeData('orders.json', orders);

  res.status(201).json(newOrder);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});