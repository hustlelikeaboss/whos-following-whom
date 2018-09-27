// DEPENDENCIES
const axios = require('axios');

/**
 * 
 * @param {*} url 
 * @param {*} params 
 */
const getData = (url, params = {}) => {
    return axios({
        method: 'get',
        url: url,
        params: params,
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
        data: params,
    })
}

module.exports = {
    getData,
    postData
}