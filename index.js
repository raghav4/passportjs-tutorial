const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.set('view engine', 'ejs');
app.use('/auth', authRoutes);
// Create home route.

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000...')
})