// const expect = require('chai').expect;
import expect from 'expect';
const server = require('../server/index');
const models = require('../server/models/index');
const supertest = require('supertest');


describe('Students tests', () => {
	before((done) => {
		return models.Student.sync({force: true})
			.then(() => models.Student.bulkCreate([
				{name: 'test0', email: 'test0@gmail.com', address: '123 main st'},
				{name: 'test1',email: 'test1@gmail.com', address: 'new york'}
			]))
			.then(done)
			.catch((err)=> console.log(err))
	});

	// test GET students from students table
	it(`'api/students' GET should get all students`, (done) => {
		supertest(server)
			.get('/api/students')
			.end((err, res) => {
				expect(res.body.length).eql(2);
				expect(res.body[0].name).equal('test0');
				expect(res.body[1].name).equal('test1');
				done();
			})
			.catch((err)=> console.log(err))
	});
});
