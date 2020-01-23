const express = require('express');
const router = express.Router();
const passport = require('passport');
// auth login

router.get('/login', (req, res) => {
    res.render('login', {
        user: req.user
    });
});

// auth logout

router.get('/logout', (req, res) => {
    //FIXME:
    res.send('Logging out..');
})
// authentication with google

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
})); // accepts strategy

// callback route for google.
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the redirect URI');
});

router.get('/facebook', (req, res) => {
    //TODO:
});

module.exports = router;