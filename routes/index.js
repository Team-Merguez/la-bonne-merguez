const express = require('express');
const config = require('../middleware/config');
const router = express.Router();

// Main routes
router.get(indexRoutes, function(req, res, next) {
  res.render(homeTemplate, config);
});

router.get(loginRoutes, function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(userIsAuthAdmin);
    res.redirect(adminTemplate, config);
  } else {
    console.log(userIsNotAuthLogin);
    res.render(loginTemplate, config);
  }
});

router.get(signupRoutes, function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(userIsAuthAdmin);
    res.redirect(adminTemplate, config);
  } else {
    console.log(userIsNotAuthSignup);
    res.render(signupTemplate, config);
  }
});

// Admin routes
router.get(adminRoutes, (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    console.log(userIsAuthAdmin);
    res.render(adminTemplate, config);
  } else {
    console.log(userIsNotAuthIndex);
    res.redirect(indexTemplate, config);
  }
})

router.get('/admin/products/add', (req, res) => {
  console.log('GET /admin/products/add');
  res.render('add', config);
})

router.get(messagesRoutes, (req, res) => {
  res.render(messagesTemplate, config);
})

// Products routes
router.get(productsRoutes, (req, res) => {
  res.render(productsTemplate);
})

// Cities routes
router.get(citiesRoutes.paris, function(req, res, next) {
  res.render(citiesTemplate, config);
});

router.get(citiesRoutes.lyon, function(req, res, next) {
  res.render(citiesTemplate, config);
});

router.get(citiesRoutes.marseille, function(req, res, next) {
  res.render(citiesTemplate, config);
});

module.exports = router;
