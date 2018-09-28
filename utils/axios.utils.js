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
        url: `${url}?client_id=${GITHUB_CLIENT_AUTH.client_id}&${GITHUB_CLIENT_AUTH.client_secret}`,
        params: params,
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'axios/0.18.0',
            'accept-encoding': '*'
          }
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
        url: `${url}?client_id=${GITHUB_CLIENT_AUTH.client_id}&${GITHUB_CLIENT_AUTH.client_secret}`,
        data: params,
    })
}

module.exports = {
    getData,
    postData
}