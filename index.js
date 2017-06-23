var express = require('express');
var application = express();

var cors = require('cors');

var posts = require('./data').posts;

application.use(cors());

application.get('/', function(req, res) {
  res.json(posts);
});

application.get('/posts/:id', function(req, res) {
  var id = Number(req.params.id);
  var post = posts.find(p => p.id == id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json(undefined);
  }
});

application.listen(5555, function() {
  console.log('Starn 5555');
});
