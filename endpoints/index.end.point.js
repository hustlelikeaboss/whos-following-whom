// DEPENDENCIES
const express = require('express');
const router = express.Router();

// GET: test endpoint - /ping
router.get('/', (req, res) => {
    res.status(200).send({
        title: 'Github API',
        author: 'Quan Jin',
        date: '09/27/2018',
        endpoints: [
            {
                url: '/',
                description: 'Root'
            },
            {
                url: '/ping',
                description: 'Health check. Should return {server:"up"} if everything goes well'
            },
            {
                url:'/api/followers/:username',
                description: 'This endpoint takes a a Github user\'s username and return a nested three-level deep array'
            }
        ]
    });
});

module.exports = router;