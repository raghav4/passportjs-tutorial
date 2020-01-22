const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20'); // Class

passport.use(new GoogleStrategy({
    // options for strategy
}), () => {
    // passport callback function
})