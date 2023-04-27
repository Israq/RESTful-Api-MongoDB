const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('The app is working on this page');
});

module.exports = router;