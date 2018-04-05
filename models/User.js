const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema }  = mongoose;

const userSchema = new Schema({
  googleId: String,
  username: String,
  password: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
});

//On Save Hook, encrypt password

//before saving a model run this function
userSchema.pre('save', function(next) {
  //get access to the user model
  const user = this;

  //generate a salt then run callback function
  bcrypt.genSalt(10, function(err, salt) {
    if(err) {
      return next(err);
    }
    //hash our password using the salt(crypt)
    bcrypt.hash(user.password, salt, null, function(err, hash) {
        if(err) {
          return next(err);
        }
        //overwrite plain text password with encrypted password
        user.password = hash;
        next();
    })
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) { return callback(err); }

    callback(null, isMatch);
  });
};

const ModelClass = mongoose.model('users', userSchema);

module.exports = ModelClass;
