const passport = require('passport');
const passportService = require('../services/passport');
const Authentication = require('../controllers/authentication');

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
  app.get('/auth/google/callback', passport.authenticate('google'));

  //logging out of application
  app.get('/api/logout', (req, res) => {
    req.logout();
    User.findAll()
      .then((users) => {
        res.send(req.users)
      });
  });

app.get('/api/current_user', passportService.list);
app.get('/', requireAuth, function(req, res) {
  res.send({message: 'Super secret code is ABC123'});
});

app.post('/signin', requireSignin, Authentication.signin);
app.post('/signup', Authentication.signup);

};