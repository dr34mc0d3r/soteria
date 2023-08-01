
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();
const connectDB = require('./utils/db');
const cookieParser = require('cookie-parser');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const userRoutes = require('./routes/userRoutes');
const assetRoutes = require('./routes/assetRoutes');

app.get('/', function (req, res) {
  res.status(201).send({ message: 'welcome' });
})

app.use('/api/auth/', userRoutes);
app.use('/api/asset/', assetRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
