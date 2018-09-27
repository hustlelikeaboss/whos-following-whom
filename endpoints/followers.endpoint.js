// DEPENDENCIES
const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const asyncWrapper = require('../utils/async.wrapper');
const getFollowers = require('../services/getFollowers');
const {
    getData
} = require('../utils/axios.utils');

/**
 * GET: followers endpoint - /api/followers
 */
router.get('/:username', asyncWrapper(async (req, res, next) => {
    const followers = await getFollowers.byUsername(req.params.username);
    res.status(200).send(followers);

    // https://blog.lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795

}));

module.exports = router;