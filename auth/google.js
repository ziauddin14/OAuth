
import passport from 'passport';
import { configDotenv } from 'dotenv';
var GoogleStrategy = require('passport-google-oauth20').Strategy;
configDotenv()
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE-CLIENT-ID,
    clientSecret: process.env.GOOGLE-CLIENT-SECRET,
    callbackURL: process.env.CALLBACK-Url
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, user);
});