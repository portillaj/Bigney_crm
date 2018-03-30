const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const config = require('../config/dev');
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
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
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

  }));

//Passport LOCAL STRATEGY
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  //verify this email and password, call done with the username
  //if it is the correct email and password
  //otherise , call done with false
  User.findOne({ email: email }, function(err, user) {
    if(err) { return done(err); }
    if(!user) { return done(null, false); }

    //compare passwords logic - is password equal to user.password
    user.comparePassword(password, function(err, isMatch) {
      if(err) { return done(err); }
      if(!isMatch) { return done(null, false)}

      return done(null, user);
    });
  });
});

  //PASSPORT JWT Strategy
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
  };

  //Create JWT Strategy
  const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // see if the user ID in the payload exists in our database
    //if it does, call done with that users
    //otherwise call done without a user object 
    User.findById(payload.sub, function(err, user) {
      if(err) { return done(err, false); }

      if(user) {
        done(null, user);
      }else {
        done(null, false); 
      }
    });
  });

  //tell passport to use this Strategy
  passport.use(jwtLogin);
  passport.use(localLogin);