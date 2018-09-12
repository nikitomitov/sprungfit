var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');
var express = require('express');
var router = express.Router();

const saltRounds = 8;
const tokenExpirationTime = 86400; // expires in 24 hours
const INSERT_USER_QUERY = 'INSERT INTO users VALUES(null, ?, ?)';
const FIND_USER_QUERY = 'SELECT * FROM users WHERE username = ?';

const generateToken = payload => jwt.sign(
    payload, 
    config.secret, 
    { expiresIn: tokenExpirationTime }
);

router.post('/register', function(req, res) {
    const db = res.locals.db;
    const { username } = req.body;

    bcrypt.hash(req.body.password, saltRounds) 
    .then(hash => db.query(INSERT_USER_QUERY,[username, hash]))
    .catch(err => res.status(500).json(err))
    .then(results => {
        const token = generateToken({ id: results.insertId });
        res.status(200).send({ auth: true, token: token });
    })
    .catch(err => res.status(500).json(err));
});


router.post('/login', function(req, res) {
  let user = null;

  res.locals.db.query(FIND_USER_QUERY, [req.body.username])
  .catch(err => res.status(500).send('Error on the server.'))
  .then(results => {
    user = results[0];
    if (!user) { 
        res.status(404).send('No user found.');
        return Promise.reject();
    }

    return bcrypt.compare(req.body.password, user.password);
  })
  .then(isPasswordValid => {
    if (!isPasswordValid) 
        return res.status(401).send({ auth: false, token: null });

    const token = generateToken({ id: user.id });
    res.status(200).send({ auth: true, token: token });
  });
});

module.exports = router;
