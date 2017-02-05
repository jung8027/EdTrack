//require dev-dependencies
let models = require('../server/models');
let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require('supertest');

chai.use(chaiHttp);

describe('beginning topic api tests', () => {
	//dummy test example
	it(`sample test, should pass`, (done) => {
		expect(3).equal(3);
		done();
	});
});

describe('test if get topics route is successful', () => {

	//example of how to do a test to get all Mentor route
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

	it(`'/api/topic/:29' should respond with one Topic.`, (done) => {
		supertest(server)
			.get('/api/topic/29')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body).to.have.property('name');
				expect(res.body.name).to.not.equal(null);
				// expect(res.body).to.have.property('email');
				// expect(res.body.email).to.not.equal(null);
				done();
			});
	});

});

// describe('new mentor with duplicate name. should receive ERROR MESSAGE: name must be unique', () => {

// 	let mentor2 = {name: "test3", email: 'newemail@gmail.com'};

// 	// before((done)=>{
// 	// 	return models.Mentor.sync()
// 	// 	.then(() => models.Mentor.create(mentor2))
// 	// 	.catch((err) => console.log('ERROR MESSAGE:', err.errors[0].message))
// 	// 	.then(() => done());
// 	// });


// });
