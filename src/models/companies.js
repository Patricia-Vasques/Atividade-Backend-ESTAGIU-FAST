//Resolução atividade 7
const { connection } = require ('../database/connection')
const { STRING, DATE } = require('sequelize')

const Companies = connection.define('companies', {
cnpj: STRING,
company_name: STRING,
contact: STRING,
cep: STRING,
address: STRING,
neighborhood: STRING,
city: STRING,
state: STRING,
number: STRING,
complement:STRING,
rh_analyst_name: STRING,
supervisor_name: STRING,
createdAt: DATE,
updatedAt: DATE
},
{underscored: true}
);

module.exports = {
    Companies
}