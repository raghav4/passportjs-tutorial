const express = require('express');
const router = express.Router();

// auth login

router.get('/login', (req, res ) => {
    res.render('login');
});

// auth logout

router.get('/logout', (req, res) => {
    //FIXME:
    res.send('Logging out..');
})
// authentication with google

router.get('/google', (req, res) => {
    //TODO: passport js 
});

router.get('/facebook', (req, res) => {
    //TODO:
});

module.exports = router;