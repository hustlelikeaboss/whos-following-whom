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
    const followersOfFollowersFollowers = await getFollowers.threeLevelsDeepFor(req.params.username);

    // send response
    res.status(200).send(followersOfFollowersFollowers);
}));

module.exports = router;