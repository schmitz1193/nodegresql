'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

const Frienemy = sequelize.define('frienemy', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Project = sequelize.define('project', {
  username: Sequelize.STRING
});

Project.hasMany(Frienemy, {as: 'workers'});

let jane;

sequelize.sync().then(() => {
  jane = Frienemy.create({
    name: 'Jane Doe',
    birthday: new Date('1980-3-4')
  });
}).then(function(frienemy) {
  console.log(jane);
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
}).then((project) => {
  // jane.addProject(project);
});



