const router = require("express").Router();
const { Post } = require("../models");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["title", "content", "created_at"],
      order: [["created_at", "DESC"]],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("landing", { 
      posts,
      loggedIn: req.session.loggedIn
     } );

  } catch (err) {
    res.status(500).json(err);
  }

});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render("login");
});

// route to get all posts by user id who is signed in
router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
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

