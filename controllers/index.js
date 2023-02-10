const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


router.get('/', (req, res) => {
    res.render('landing', {});
  });

module.exports = router;

router.get("/login", (req, res) => {
    res.render("login", {});
  }); 


router.get("/dashboard", (req, res) => {
    res.render("dashboard", {});
  }
);