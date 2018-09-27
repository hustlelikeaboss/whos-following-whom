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
/**
 * TEST ENDPOINT: /ping
 */
describe('TEST getFollowers.byUsername("hustlelikeaboss")', () => {

    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/hustlelikeaboss/followers')
            .reply(200, response);
    });


    it('should return an array of 3 followers with status code 200', (done) => {
         getFollowers.byUsername('hustlelikeaboss')
            .then(followers => {
                followers.should.be.a('array');
                followers.should.have.lengthOf(3);
            });

        done();
    });


});