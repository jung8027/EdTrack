//require dev-dependencies
let models = require('../server/models');
let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require('supertest');
let MentorSeedFunc = require('../server/seeders/MentorSeed');

chai.use(chaiHttp);

describe('beginning mentor api tests', () => {
	//Before the test we empty the database
	before((done)	 => {
    models.Mentor.sync({force: true})
		.then(() => {
			MentorSeedFunc();
	    done();
    });
  });

	//dummy test example
	it(`sample test, should pass`, (done) => {
		expect(3).equal(3);
		done();
	});
});

describe('test if get mentors route is successful', () => {

	//example of how to do a test to get all Mentor route
	it(`'/api/mentor' should respond with all Mentors`, (done) => {
		supertest(server)
			.get('/api/mentor')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('array');
        expect(res.body.length).to.eql(11);
				done();
			});
	});

	it(`'/api/mentor' should respond with one Mentor.`, (done) => {
		supertest(server)
			.get('/api/mentor/1')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body).to.have.property('name');
				expect(res.body.name).to.not.equal(null);
				expect(res.body).to.have.property('email');
				expect(res.body.email).to.not.equal(null);
				done();
			});
	});
});

describe('test if post mentors route is successful', () => {

	//create fake mentor
	it(`'post to /api/mentor' to return created mentor information`, (done) => {
		supertest(server)
			.post('/api/mentor')
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({
				name: 'test4',
				email: 'test4@gmail.com'
			})
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body).to.have.property('name');
				expect(res.body.name).to.not.equal(null);
				expect(res.body).to.have.property('email');
				expect(res.body.email).to.not.equal(null);
				expect(res.body).to.have.property('message');
				expect(res.body.message).to.equal('Mentor successfully added!');
				done();
			});
	});
});
