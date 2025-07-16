// const express = require('express');
// const usersRouter = require('./routes/users');
// const app = express();
// const port = 3001;

// app.use('/users', usersRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const productsRouter = require('./routes/products');
const app = express();
const port = 3001;

app.use(express.json());

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
