const server = require('../server/index');
const models = require('../server/models/index');
const supertest = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('Students tests', () => {
	//fake student data that we'll use for tests
	let students = [
		{name: 'test1', email: 'test1@gmail.com', address: '123 main st'},
		{name: 'test2', email: 'test2@gmail.com', address: '11 grove st'},
		{name: 'test3', email: 'test3@gmail.com', address: '500 5 ave'},
	];
	//you can use 'before' to seed your database with data before your tests
	//you only need one 'before' statement
	//theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
	before(() => {
		return models.Student.sync({force: true})
			.then(() => models.Student.bulkCreate(students))
			.catch((err) => console.log('DB Err!', err));
	});
	// test GET students from students table
	it(`'api/student' GET should get all students`, (done) => {
		supertest(server)
			.get('/api/student')
			.end((err, res) => {
				try {
					expect(res.body.length).equal(3);
					expect(res.body[0].name).equal(students[0].name);
					expect(res.body[1].name).equal(students[1].name);
					expect(res.body[2].name).equal(students[2].name);
					done();
				}
				catch (e) {
					done(e)
				}
			})
	});

// test GET student by name
	it(`'api/student/:id' should get 1 student`, (done) => {
		supertest(server)
			.get('/api/student/1')
			.end((err, res) => {
				if (err) done(err);
				res.body.should.be.a('object');
				expect(res.body.id).equal(1);
				done();
			});
	});

// 	// test creating a new student
	it(`'api/students' POST should post a new student to the database`, (done) => {
		supertest(server)
			.post('/api/student')
			.type('form')
			.send({name: 'iliass4',email: 'iliass4@gmail.com',address: '4 main st'})
			.end((err, res) => {
				expect(res.body).exist;
				expect(res.body).be.a('object');
				done();
			});
	});
});
