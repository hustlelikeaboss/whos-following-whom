// DEPENDECIES
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

// LOCAL IMPORTS
const server = require('../../server');

/**
 * TEST ENDPOINT: /api/followers/:username
 */
describe('TEST get("/api/followers/hustlelikeaboss")', () => {
    it('should return an array of 3 followers with status code 200', (done) => {
        let username = 'hustlelikeaboss';
        chai.request(server)
            .get('/api/followers/' + username)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.lengthOf(3);
            });
        done();        
    });
});