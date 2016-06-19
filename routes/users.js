var express = require('express');
var router = express.Router();
var hello = require('../src/hello');
var passport = require('passport');
/* GET users listing. */



router.get('/', function(req, res) {
  if(req.user) {
    res.send("hola " + req.user.username);
  }
  else {
    res.sendStatus(401);
  }

});



router.post('/login', passport.authenticate('local'), function(req, res){
  res.send('sfsd');
});

router.get('/logout', function(req, res){
  req.logout();
  res.send("logged out");
});

router.get('/logout', function(req, res){
  req.logout();
  res.send("logged out");
});

module.exports = router;
