
let express = require('express');
let router = express.Router();

// reference Game model for CRUD
let Developer = require('../models/developer');

router.get('/', function(req, res, next) {
  Developer.find(function(err, developers) {
     if (err) {
        console.log(err);
        res.end(err);
        return;
     }
     // load the view and pass the games data to it
     // console.log(games);
     res.render('developers/index', {
        developers: developers,
        title: 'List of developers'
     });
  });
});

router.get('/add', function(req, res, next) {
  res.render('developers/add', { title : 'Add new Developer'});
});

router.post('/add', function(req, res, next) {
  Developer.create({
    name: req.body.name,
    year: req.body.year,
    address: req.body.address,
    revenue: req.body.revenue
  }, function(err) {
    if (err) {
      console.log('something went wrong ' + err );
      res.render('error');
      return;
    }
    res.redirect('/developers/add');
  });
});

// make public
module.exports = router;
