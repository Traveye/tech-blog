const router = require('express').Router();



router.get('/', (req, res) => {
    res.render('landing', {});
  });

module.exports = router;

router.get("/login", (req, res) => {
    res.render("login", {});
  }); 
