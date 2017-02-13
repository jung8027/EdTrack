let models = require('../server/models');
let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require('supertest');
let instructorSeedFunc = require('../server/seeders/instructorSeed');


chai.use(chaiHttp);

describe("beginning instructor api tests", () => {
	before( done => {
		models.Instructor.sync({ force : true })
			.then(  () => {
				instructorSeedFunc();
				done();
			});
	});

	it(`sample test, should pass`, done => {
		expect(3).equal(3);
		done();
	});
});

describe("GET-instructor(s)-Route Test", () => {
	it(`'/api/instructor' should respond with all instructors`, done => {
				supertest(server)
					.get('/api/instructor')
					.set('Accept', 'application/json')
					.expect(200)
					.end(( err, res ) => {
						if ( err ) done( err );
						res.body.should.be.a("array");
						expect( res.body.length ).to.eql(5);
						done();
			});
	});

	it(`'/api/instructor/:id' should respond with one instructors`, done => {
				supertest(server)
					.get('/api/instructor/1')
					.set('Accept', 'application/json')
					.expect(200)
					.end(( err, res ) => {
						if ( err ) done( err );
						res.body.should.be.a("object");
						expect( res.body ).to.have.property("name");
						expect( res.body.name ).to.not.equal(null);
						expect( res.body ).to.have.property("email");
						expect( res.body.email ).to.not.equal(null);
						done();
			});
	});

});




describe('POST-instructor-route Test', () => {

	//create fake instructor
	it(`'post to /api/instructor' to return created instructor information`, (done) => {
		supertest(server)
			.post('/api/instructor')
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({
				name: "benno",
				email: "email@c4q.nyc",
				ClassId: 1
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
				expect(res.body.message).to.equal('instructor successfully added!');
				done();
			});
	});
});

