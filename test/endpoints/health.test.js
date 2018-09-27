// DEPENDECIES
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

// LOCAL IMPORTS
const server = require('../../server');

/**
 * TEST ENDPOINT: /ping
 */
describe('SERVER HEALTH CHECK', () => {
    it('should return {server:"up"} with status code 200', (done) => {
        chai.request(server)
            .get('/ping')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('server').eql('up');
                done();
            });
    });
});