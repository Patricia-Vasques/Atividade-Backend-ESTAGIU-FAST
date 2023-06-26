const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');

const Contract = connection.define('contract', {
  start_validity: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  end_validity: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  remuneration: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  extra: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = { Contract };