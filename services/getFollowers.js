const { getData } = require('../utils/axios.utils');

/**
 * 
 * @param {*} username 
 * @param {*} limit 
 */
const byUsername = async (username) => {
    const url = `${process.env.GITHUB_API_USERS}/${username}/followers`;
    return await byUrl(url);
}


/**
 * @param {*} url 
 */
const byUrl = async (url, limit = 5) => {
    const response = await getData(url);
    const followers = response.data;

    return (followers && followers.length > limit) ? followers.slice(0, limit - 1) : followers;
}

module.exports = {
    byUsername,
    byUrl
};