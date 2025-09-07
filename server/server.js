require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from the E-commerce API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});