const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
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


  //PASSPORT LOCAL STRATEGY JWT
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


  })

);