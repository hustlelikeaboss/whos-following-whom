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
    // followers: 1 level deep
    let followers = await getFollowers.byUsername(req.params.username);

    // followers of followers: 2 level deep
    let unresolvedPromises = followers.map( async (follower) => {
        let theirFollowers = await getFollowers.byUrl(follower.followers_url);
        follower.theirFollowers = theirFollowers;

        return follower;
    });
    followers = await Promise.all(unresolvedPromises);

    // followers of followers' followers: 3 level deep
    unresolvedPromises = followers.map( async (follower) => {
        let theirFollowers = follower.theirFollowers;

        let nestedUnresolvedPromises = theirFollowers.map( async (follower) => {
            let theirFollowers = await getFollowers.byUrl(follower.followers_url);
            follower.theirFollowers = theirFollowers;
    
            return follower;
        });
        theirFollowers = await Promise.all(nestedUnresolvedPromises);

        follower.theirFollowers = theirFollowers;
        return follower;
    });
    followers = await Promise.all(unresolvedPromises);

    res.status(200).send(followers);
}));

module.exports = router;