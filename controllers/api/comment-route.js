const router = require('express').Router();
const { Comment } = require('../../models');

// route to post a new comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});