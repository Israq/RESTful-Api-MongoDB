const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('The app is working on this page');
});
router.get('/specific', (req, res) => {
    res.send('The app is working on this page/specific');
});



module.exports = router;