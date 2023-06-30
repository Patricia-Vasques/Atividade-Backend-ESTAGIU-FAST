const { DATE, INTEGER, DATEONLY, BOOLEAN, FLOAT } = require('sequelize');
const { connection } = require('../database/connection');
const { Trainees } = require('./trainees');
const { Companies } = require('./companies');
const { Category } = require ('./category');


const Contract = connection.define('contract', {
  traineesId: {
    type: INTEGER,
    references: {
      model: Trainees,
      key: 'id'
    }
  },
  categoryId: {
      type: INTEGER,
      references: {
        model: category,
        key: 'id'
      }
    },
    companiesId: {
      type: INTEGER,
      references: {
        model: companies,
        key: 'id'
      }
    },
  start_validity:DATEONLY,
  end_validity: DATEONLY,
  satus: BOOLEAN,
  remuneration: FLOAT,
  extra: FLOAT,
  createdAt: DATE, 
  updatedAt: DATE
});

Contract.belongsTo(Trainees)
Contract.belongsTo(Companies)
Contract.belongsTo(Category)

module.exports = { Contract };