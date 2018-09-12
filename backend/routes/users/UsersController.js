var express = require('express');
var router = express.Router();

const GET_USERS_WITH_FOLLOWING_FLAG = 
'SELECT u.id, u.username, if(uf.followed_id IS NULL ,false, true) as isFollowing '+
'FROM users u '+
'LEFT OUTER JOIN user_follows_user uf ON '+
'(uf.followed_id = u.id AND uf.follower_id = ?) WHERE u.id <> ?;';

const FOLLOW_USER_QUERY = 'INSERT INTO user_follows_user VALUES (?,?);';
const GET_USER_POSTS = 'SELECT id,text,timestamp FROM posts WHERE user_id=?;'

router.get('/', function(req, res, next) {
  const { userId } = req;
  res.locals.db.query(GET_USERS_WITH_FOLLOWING_FLAG, [userId, userId])
  .then(users => {
    users.forEach(user => user.isFollowing = !!user.isFollowing);
    res.json({"status": 200, "error": null, "data": users})
  })
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});

router.get('/:id/posts', function (req, res, next) {
  const { userId } = req;

  res.locals.db.query(GET_USER_POSTS, [userId])
  .then(posts => res.json({"status": 200, "error": null, "data": posts}))
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});

router.post('/follow/:id', function (req, res, next) {
  const { userId } = req;
  const otherUserId = req.params.id;

  res.locals.db.query(FOLLOW_USER_QUERY, [userId, otherUserId])
  .then(data => res.json({"status": 200, "error": null, "data": null}))
  .catch(error => res.json({"status": 500, "error": error, "data": null}));
});



module.exports = router;