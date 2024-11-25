const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});