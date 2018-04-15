const passport = require('passport');
const passportService = require('../services/passport');
const Authentication = require('../controllers/authentication');
const User = require ('../models/User.js');
const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false});

module.exports = (app) => {
    app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email']
  })
);

  //callback route for google
  app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard'); 
    }
  );

  //logging out of application
  app.get('/api/logout', (req, res) => {
    console.log('this was called');
    req.logout();
  });

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

app.post('/signin', requireSignin, Authentication.signin);
app.post('/signup', Authentication.signup);

};