const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');

const Pool = require('pg').Pool;

var strategy = new LocalStrategy(function verify(email, password, cb) {
    db.get('SELECT * FROM users WHERE email = ?', [ email ], function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
      crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
      });
    });
});

