var express = require('express');
var router = express.Router();

const INSERT_POST_QUERY = 'INSERT INTO posts VALUES (null, ?, ?, ?)';

router.post('/', function (req, res, next) {
  const { userId } = req;
  const { text, timestamp } = req.body;

  res.locals.db.query(INSERT_POST_QUERY, [text, timestamp, userId])
  .then(results => res.json({"status": 200, "error": null, 
    "data": { id : results.insertId }
  }))
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});

module.exports = router;
