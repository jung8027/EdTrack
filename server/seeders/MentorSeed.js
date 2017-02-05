const models = require('../models');

models.Mentor.sync({force: true})
.then(() => models.Mentor.bulkCreate([
  {name: 'test1', email: 'test1@gmail.com'},
  {name: 'test2', email: 'test2@gmail.com'},
  {name: 'test3', email: 'test3@gmail.com'},
  {name: 'Justin Greet', email: 'justin.greet@gmail.com'},
  {name: 'Josh Cohen', email: 'josh.cohen@gmail.com'},
  {name: 'Kenny Durkin', email: 'kenny.durkin@gmail.com'},
  {name: 'Nathan Brown', email: 'nathan.brown@gmail.com'},
  {name: 'Cassie Moi', email: 'cassie.moi@gmail.com'},
  {name: 'Paul Hine', email: 'paul.hine@gmail.com'},
  {name: 'Paul Schreiber', email: 'paul.schreiber@gmail.com'},
  {name: 'Lev Izraelit', email: 'lev.izraelit@gmail.com'}
]));
