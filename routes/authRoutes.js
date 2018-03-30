const passport = require('passport');

const api = require('../services/passport');
const Authentication = require('../controllers/authentication');

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

app.get('/api/current_user', api.list);
app.post('/register', Authentication.signup);

};