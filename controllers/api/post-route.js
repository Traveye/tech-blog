const router = require('express').Router();
const { Post } = require('../../models');

// route to get all posts that only has the title and date created
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        attributes: ['id', 'title', 'created_at'],
        order: [['created_at', 'DESC']],
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
    
        res.render('landing', { posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to post a new post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        });
    
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// route to update a post
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(
        {
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
            id: req.params.id,
            },
        }
        );
    
        if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
        }
    
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to delete a post
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
        where: {
            id: req.params.id,
        },
        });
    
        if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
        }
    
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});