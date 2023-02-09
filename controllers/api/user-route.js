const router = require('express').Router();
const { User } = require('../../models');

//route to create new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
    
        res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});