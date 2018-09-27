// DEPENDENCIES
const express = require('express');
const router = express.Router();

// GET: test endpoint - /ping
router.get('/', (req, res) => {
    res.status(200).send({
        server: 'up'
    });
});

module.exports = router;