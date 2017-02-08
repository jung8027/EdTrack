const models = require('../models');

models.Topic.sync({force: true})
.then(() => models.Topic.bulkCreate([
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
