// DEPENDECIES
const nock = require('nock');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

// LOCAL IMPORTS
const server = require('../../server');
const getFollowers = require('../../services/getFollowers');
const response = require('../data/hustlelikeaboss.followers');
const GITHUB_CLIENT_AUTH = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET
}
/**
 * TEST  getFollowers.byUsername()
 */
describe('TEST getFollowers.byUsername("hustlelikeaboss")', () => {

    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/hustlelikeaboss/followers')
            .query({params: GITHUB_CLIENT_AUTH})
            .reply(200, response);
    });


    it('should return an array of 3 followers with status code 200', (done) => {
         getFollowers.byUsername('hustlelikeaboss')
            .then(followers => {
                followers.should.be.an('array');
                followers.should.have.lengthOf(3);
            });

        done();
    });


});

/**
 * TEST getFollowers.forArrayOfUsers()
 */
describe('TEST getFollowers.forArrayOfUsers()', () => {

    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/beyhosni/followers')
            .query({params: GITHUB_CLIENT_AUTH})
            .reply(200, response[0].theirFollowers);

        nock('https://api.github.com')
            .get('/users/brittanymwagner/followers')
            .query({params: GITHUB_CLIENT_AUTH})
            .reply(200, response[1].theirFollowers);

        nock('https://api.github.com')
            .get('/users/ryhan000/followers')
            .query({params: GITHUB_CLIENT_AUTH})
            .reply(200, response[2].theirFollowers);
    });


    it('should return an array of 3 users and their followers with status code 200', (done) => {
        let users = [
            {"followers_url": "https://api.github.com/users/beyhosni/followers"},
            {"followers_url": "https://api.github.com/users/brittanymwagner/followers"},
            {"followers_url": "https://api.github.com/users/ryhan000/followers"}
        ]

        let unresolvedPromises = getFollowers.forArrayOfUsers(users);
        unresolvedPromises.should.be.an('array').that.has.lengthOf(3);
        unresolvedPromises[0].should.be.a('promise');

        let resolvedUsers = Promise.all(unresolvedPromises);
        done();
        resolvedUsers.should.be.an('array').that.has.lengthOf(3);
        resolvedUsers[0].followers.should.have.lengthOf(5);
    });

});