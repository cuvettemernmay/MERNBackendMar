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

async function readProducts(file) {
  const products = await fs.readFile(path.join(dataPath, file), 'utf8');
  return JSON.parse(products);
}

async function writeProducts(file, data) {
  await fs.writeFile(path.join(dataPath, file), JSON.stringify(data, null, 2), 'utf8');
}


// Get all products
app.get('/myProducts', async (req, res) => {
  const products = await readProducts('products.json');
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});