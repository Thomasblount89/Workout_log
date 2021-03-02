const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Frankie83@localhost:5432/workout_log");

module.exports = sequelize;

