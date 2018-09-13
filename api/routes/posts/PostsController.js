var express = require('express');
var router = express.Router();
var moment = require('moment');

const INSERT_POST_QUERY = 'INSERT INTO posts VALUES (null, ?, ?, ?)';
const USER_FEED_QUERY = 'SELECT p.id, p.text, p.timestamp, u.username '+
'FROM posts p '+
'LEFT OUTER JOIN user_follows_user uf ON '+
'(uf.followed_id = p.user_id AND uf.follower_id = ?) '+
'LEFT OUTER JOIN users u ON (p.user_id = u.id) '+
'WHERE uf.followed_id is not null '+
'ORDER by p.timestamp DESC;';
const GET_USER_POSTS = 'SELECT id,text,timestamp FROM posts WHERE user_id=? ORDER BY timestamp DESC;'

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
  .then(results => {
    results.forEach(result => 
      result.timestamp = moment(result.timestamp).format("YYYY-MM-DD HH:mm"));
    res.json({"status": 200, "error": null, "data": results});
  })
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});

router.get('/own', function (req, res, next) {
  const { userId } = req;

  res.locals.db.query(GET_USER_POSTS, [userId])
  .then(posts => {
    posts.forEach(post => 
      post.timestamp = moment(post.timestamp).format("YYYY-MM-DD HH:mm")
    );

    res.json({"status": 200, "error": null, "data": posts});
  })
  .catch(error => {
    console.log(error);
    res.json({"status": 500, "error": error, "data": null});
  });
});

module.exports = router;
