const Topic = require('../server/models').Topic;

//Artist.sync will create the artists table
Topic.sync({force: true})
//add the following three artists to the database:
.then(() => Topic.bulkCreate([
  {name: 'React'},
  {name: 'Redux'},
  {name: 'Express'},
  {name: 'Sequelize'},
  {name: 'Functions'},
  {name: 'Recursion'},
  {name: 'Variables'},
  {name: 'Linked lists'},
  {name: 'JavaScript Fundamentals'},
  {name: 'Data Structures'},
]))

// if everything is correct, you should only have Ten topics in your database
.catch((err) => console.log(err));