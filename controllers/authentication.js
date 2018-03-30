const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config/dev');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({ error: "You must provide email and password" });
    }
    //See if a user with the given email exists (no duplicates)
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) { return next(err); }

         //if a user with email does exist, retuan an error
        if(existingUser) {
            return res.status(422).send({ error: "Email is in use"});
        }
        //if a user with email does NOT exist, create and save user record
        const user = new User({
            email: email, 
            password: password
        });
            user.save((err) => {
                if(err) { return next(err); }

                 //Respond to request indicating the user was created
                 res.json({ token: tokenForUser(user) });
            });
    });
};