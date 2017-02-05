//require dev-dependencies
let models = require('../server/models');
let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require('supertest');

chai.use(chaiHttp);

describe('beginning grade api tests', () => {
	//dummy test example
	it(`sample test, should pass`, (done) => {
		expect(3).equal(3);
		done();
	});
});

describe('test if get grades route is successful', () => {

	//example of how to do a test to get all grades route: /api/grade
	it(`'/api/grade' should respond with all grades`, (done) => {
		supertest(server)
			.get('/api/grade')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('array');
        expect(res.body.length).to.eql(0);
				done();
			});
	});

	it(`'/api/grade' should respond with one grade.`, (done) => {
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

// describe('new grade with duplicate grade. should receive ERROR MESSAGE: grade must be unique', () => {

// 	let grade2 = {grade: "test3", type: 'newtype@gmail.com'};

// 	// before((done)=>{
// 	// 	return models.grade.sync()
// 	// 	.then(() => models.grade.create(grade2))
// 	// 	.catch((err) => console.log('ERROR MESSAGE:', err.errors[0].message))
// 	// 	.then(() => done());
// 	// });


// });
