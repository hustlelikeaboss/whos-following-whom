// DEPENDENCIES
const axios = require('axios');
const GITHUB_CLIENT_AUTH = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET
}
/**
 * 
 * @param {*} url 
 * @param {*} params 
 */
const getData = (url, params = {}) => {
    return axios({
        method: 'get',
        url: url,
        params: Object.assign(params, GITHUB_CLIENT_AUTH),
        responseType: 'json',
    })
}

/**
 * 
 * @param {*} url 
 * @param {*} params 
 */
const postData = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: Object.assign(params, GITHUB_CLIENT_AUTH),
    })
}

module.exports = {
    getData,
    postData
}