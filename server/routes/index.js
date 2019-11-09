var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.conect();
var db = mongoose.connection();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// db.users.insert({
//   username: "Patrick Narvasa",
//   number: 099694201234,
//   plan: 30,
//   donated_so_far: 75, //becomes 81 after application of plan
//   charity: "Philam Foundation"
// })

// db.updates.insert({
//   charity: "Philam Foundation",
//   message: "Thank you for helping Philam Foundation send over 20 students to school! We could not have done this without your help! We look forward to continuing our partnership and continuing to help those who are in need."
// })

module.exports = router;
