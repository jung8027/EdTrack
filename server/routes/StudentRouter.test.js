// const expect = require('chai').expect;
// const server = require('../index');
// const models = require('../models');
// const supertest = require('supertest');
//
// describe('Our first test', () => {
// 	it('should pass', () => {
// 		expect(true).toEqual(true);
// 	});
// });


// describe('Students tests', () => {
// 	before((done) => {
// 		return models.Student.sync({force: true})
// 			.then(() => models.Student.bulkCreate([
// 				{name: 'test0', email: 'test0@gmail.com', address: '123 main st'},
// 				{name: 'test1',email: 'test1@gmail.com', address: 'new york'}
// 			]))
// 			.then(done)
// 			.catch((err)=> console.log(err))
// 	});
//
// 	// test GET students from students table
// 	it(`'api/students' GET should get all students`, (done) => {
// 		supertest(server)
// 			.get('/api/students')
// 			.end((err, res) => {
// 				expect(res.body.length).eql(2);
// 				expect(res.body[0].name).equal('test0');
// 				expect(res.body[1].name).equal('test1');
// 				// done();
// 			}).then(done())
// 			.catch((err)=> console.log(err))
// 	});
//
//
//
// // // test GET student by name
// // 	it(`'api/students/:studentname' should get 1 student`, (done) => {
// // 		supertest(srcServer)
// // 			.get('/api/students/test1')
// // 			.end((err, res) => {
// // 				expect(res.body).be.a('array');
// // 				expect(res.body.length).equal(2);
// // 				expect(res.body[0].id).equal(2);
// // 				done();
// // 			});
// // 	});
// //
// // 	// test creating a new student
// // 	it(`'api/students' POST should post a new student to the database`, (done) => {
// // 		supertest(srcServer)
// // 			.post('/api/students')
// // 			.type('form')
// // 			.send({studentname: 'iliass1', password:  'pass1',email: 'iliass1@gmail.com',profilePhoto:'',headerPhoto:'',website:'iliass1.com',birthday:'20-12-2012',location:'NY',bio:'what\'sup wala'})
// // 			.end((err, res) => {
// // 				expect(res.body).exist;
// // 				expect(res.body).be.a('object');
// // 				done();
// // 			});
// // 	});
//
// });
