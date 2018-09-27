const { getData } = require('../utils/axios.utils');

/**
 * 
 * @param {*} username 
 * @param {*} limit
 * @returns array of users  
 */
const byUsername = async (username) => {
    const url = `${process.env.GITHUB_API_USERS}/${username}/followers`;
    return await byUrl(url);
}


/**
 * @param {*} url
 * @returns array of users 
 */
const byUrl = async (url, limit = 5) => {
    const response = await getData(url);
    let followers = response.data;
    followers.sort( (f1, f2) => f1.id - f2.id );

    return (followers && followers.length > limit) ? followers.slice(0, limit) : followers;
}

/**
 * 
 * @param {*} users 
 * @returns array of promises 
 */
const forArrayOfUsers = (users) => {
    return users.map( async (user) => {
        let followers = await getFollowers.byUrl(user.followers_url);
        user.followers = followers;

        return follower;
    });
}

module.exports = {
    byUsername,
    byUrl,
    forArrayOfUsers
};