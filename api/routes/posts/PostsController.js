var express = require('express');
var router = express.Router();

const INSERT_POST_QUERY = 'INSERT INTO posts VALUES (null, ?, ?, ?)';
const USER_FEED_QUERY = 'SELECT p.id, p.text, p.timestamp '+
'FROM posts p '+
'LEFT OUTER JOIN user_follows_user uf ON '+
'(uf.followed_id = p.user_id AND uf.follower_id = ?) '+
'WHERE uf.followed_id is not null;';

router.post('/', function (req, res, next) {
  const { userId } = req;
  const { text, timestamp } = req.body;

  res.locals.db.query(INSERT_POST_QUERY, [text, timestamp, userId])
  .then(results => res.json({"status": 200, "error": null, 
    "data": { id : results.insertId }
  }))
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});

router.get('/feed', function (req, res, next) {
  const { userId } = req;
  
  res.locals.db.query(USER_FEED_QUERY, [userId])
  .then(results => res.json({"status": 200, "error": null, "data": results}))
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});

module.exports = router;
