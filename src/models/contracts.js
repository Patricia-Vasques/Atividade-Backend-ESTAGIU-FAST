const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');

const Contract = connection.define('contract', {
  start_validity:DATEONLY,
  end_validity: DATEONLY,
  satus: BOOLEAN,
  remuneration: FLOAT,
  extra: FLOAT,
  createdAt: DATE, 
  updatedAt: DATE
});

module.exports = { Contract };