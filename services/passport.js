const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

exports.list = function(req, res) {
  User.find(function(err, users) {
    res.send(users);
  });
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

//GOOGLE STRATEGY
passport.use(new GoogleStrategy({
    clientID: '784387864398-2pefagkb1kmf18e4nr74h40i559v3jtc.apps.googleusercontent.com',
    clientSecret: 'kr20upy_09nXtKxxQfxVkvaC',
    callbackURL: '/auth/google/callback',
    proxy: true
}, 
  async(accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const existingUser = await User.findOne({ googleId: profile.id })
      if(existingUser) {
        return done(null, existingUser);
      }
          const user = await new User({ googleId: profile.id }).save()
          done(null, user);
  })
);