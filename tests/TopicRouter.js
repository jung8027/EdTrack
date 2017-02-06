let models = require('../server/models');
let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require('supertest');

chai.use(chaiHttp);

describe('beginning topic api tests', () => {
	it(`sample test, should pass`, (done) => {
		expect(3).equal(3);
		done();
	});
});

describe('test if get topics route is successful', () => {
	it(`'/api/topic' should respond with all Topics`, (done) => {
		supertest(server)
			.get('/api/topic')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('array');
        expect(res.body.length).to.eql(10);
				done();
			});
	});

	it(`'/api/topic/:1' should respond with one Topic.`, (done) => {
		supertest(server)
			.get('/api/topic/1')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body).to.have.property('name');
				expect(res.body.name).to.not.equal(null);
				done();
			});
	});

});

