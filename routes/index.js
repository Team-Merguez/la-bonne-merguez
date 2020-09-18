const express = require('express');
const router = express.Router();

const APIRoutes = {
  title: 'La Bonne Merguez',
  cities: ['Paris', 'Lyon', 'Marseille']
}

// Main routes
router.get('/', function(req, res, next) {
  res.render('home', APIRoutes);
});

router.get('/login', function(req, res, next) {
  res.render('login', APIRoutes);
});

router.get('/signup', function(req, res, next) {
  res.render('signup', APIRoutes);
});

// Cities routes
router.get('/Paris', function(req, res, next) {
  res.render('cities', APIRoutes);
});

router.get('/Lyon', function(req, res, next) {
  res.render('cities', APIRoutes);
});

router.get('/Marseille', function(req, res, next) {
  res.render('cities', APIRoutes);
});

module.exports = router;
