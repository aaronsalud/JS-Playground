const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define our model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// On save Hook, encrypt the password
userSchema.pre('save', function (next) {
    const { password } = user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return callback(err);

        callback(null, isMatch);
    })
}

// Create the model class
const User = mongoose.model('users', userSchema);

// Export the model
module.exports = User;