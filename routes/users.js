var express = require('express');
var router = express.Router();
var hello = require('../src/hello');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send(hello.hello());
});

module.exports = router;
