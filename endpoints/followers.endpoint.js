// DEPENDENCIES
const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/async.wrapper');
const getFollowers = require('../services/getFollowers');

/**
 * GET: followers endpoint - /api/followers/:username
 */
router.get('/:username', asyncWrapper(async (req, res, next) => {

    if (!req.params.username) {
        throw Error({message: 'A username is required as a path variable.'});
    }

    // get a user's followers' followers' followers and their full data
    const followersOfFollowersFollowers = await getFollowers.threeLevelsDeepFor(req.params.username);

    // return full data
    if (req.query.full === 'true') {
        res.status(200).send(followersOfFollowersFollowers);
    }

    // parse user ids
    const followerIDs = await getFollowers.withTheirIDsOnlyThreeLevelsDeep(followersOfFollowersFollowers);
    
    // send response
    res.status(200).send(followerIDs);
}));

/**
 * GET: redirect
 */
router.get('/', (req, res, next) => {
    throw Error('A username is required as a path variable. Try /api/followers/hustlelikeaboss');
});

module.exports = router;