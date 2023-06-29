//Resolução atividade 7
const { connection } = require ('../database/connection')
const { STRING, DATE } = require('sequelize')

const Companies = connection.define('companies', {
cnpj: STRING,
companyName: STRING,
contact: STRING,
cep: STRING,
address: STRING,
neighborhood: STRING,
city: STRING,
state: STRING,
number: STRING,
complement: {
    type: STRING,
    allowNull: true
},
rhAnalystName: STRING,
supervisorName: STRING,
createdAt: DATE,
updatedAt: DATE
},
{underscored: true}
);

module.exports = {
    Companies
}