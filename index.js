const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const passportSetup = require('./services/passport-setup');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Failed to connect to MongoDB...'));

app.set('view engine', 'ejs');
app.use('/auth', authRoutes);
// Create home route.

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
