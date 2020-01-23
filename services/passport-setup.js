const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Class
require('dotenv').config();
const User = require('../models/user');

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET
}, async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({
        googleId: profile.id
    })
    if (user) return console.log('User is already in the Db..')
    // passport callback function
    user = new User({
        username: profile.displayName,
        googleId: profile.id
    });
    await user.save();
    console.log(user);
    return res.send('Saved to db');
    //console.log(profile);
}))