// DEPENDENCIES
const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/async.wrapper');
const getFollowers = require('../services/getFollowers');

/**
 * GET: followers endpoint - /api/followers/:username
 */
router.get('/:username', asyncWrapper(async (req, res, next) => {
    // get a user's followers' followers' followers and their full data
    const followersOfFollowersFollowers = await getFollowers.threeLevelsDeepFor(req.params.username);

    // parse user ids
    const followerIDs = await getFollowers.withTheirIDsOnlyThreeLevelsDeep(followersOfFollowersFollowers);
    
    // send response
    res.status(200).send(followerIDs);
}));

module.exports = router;