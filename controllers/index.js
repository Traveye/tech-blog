const router = require("express").Router();
const { Post } = require("../models");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("landing", {
    loggedIn: req.session.loggedIn
  });
});


router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  // route to get all posts that only has the title and date created
  try {
    const postData = await Post.findAll({
      attributes: ["title", "content", "created_at"],
      order: [["created_at", "DESC"]],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("dashboard", { 
      posts,
      loggedIn: req.session.loggedIn
     } );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
