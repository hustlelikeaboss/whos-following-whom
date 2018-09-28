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
                description: "Health check. Should return {'server':'up'} if everything goes well."
            },
            {
                url:'/api/followers/:username',
                description: "This endpoint takes a GitHub user's username as a path variable (and an optional query parameter) and return a 3D array. Example: '/api/followers/hustlelikeaboss'. By default, only IDs are returned. Add '?full=true' to the end of the url to get all the data related to each user in the array."
            }
        ]
    });
});

module.exports = router;