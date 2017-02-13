//require dev-dependencies
let models = require('../server/models');
let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require('supertest');
let gradeSeedFunc = require('../server/seeders/gradeSeed');


chai.use(chaiHttp);

describe('beginning grade api tests', () => {
	before((done)	 => { // before: runs before all tests
    models.Grade.sync({force: true})
		.then(() => {
			gradeSeedFunc();
			done();
    });
  });

	//dummy test example
	it(`sample test, should pass`, (done) => {
		expect(3).equal(3);
		done();
	});
});

describe('GET-grade(s)-Route Test', () => {

	//example of how to do a test to get all grades route: /api/grade
	it(`'/api/grade' should respond with all grades`, (done) => {
		supertest(server)
			.get('/api/grade')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('array');
        expect(res.body.length).to.eql(20);
				done();
			});
	});

	it(`'/api/grade/:id' should respond with one grade.`, (done) => {
		supertest(server)
			.get('/api/grade/1')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body).to.have.property('grade');
				expect(res.body.grade).to.not.equal(null);
				expect(res.body).to.have.property('type');
				expect(res.body.type).to.not.equal(null);
				done();
			});
	});

});


describe('POST-grade-route Test', () => {

	//create fake grade
	it(`'post to /api/grade' to return created grade information`, (done) => {
		supertest(server)
			.post('/api/grade')
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({
				grade: 86,
				type: 'quiz',
				StudentId: 4
			})
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body).to.have.property('grade');
				expect(res.body.name).to.not.equal(null);
				expect(res.body).to.have.property('type');
				expect(res.body.email).to.not.equal(null);
				expect(res.body).to.have.property('message');
				expect(res.body.message).to.equal('Grade successfully added!');
				done();
			});
	});
});

