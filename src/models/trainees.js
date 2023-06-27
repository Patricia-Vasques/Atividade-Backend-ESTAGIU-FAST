//Atividade-5 do trello
const { connection } = require ('../database/connection');
const { STRING, DATE, BOOLEAN } = require('sequelize');

const Trainee = connection.define('trainne', {
    name: STRING,
    email: STRING,
    rg: {
        type: STRING,
        unique: true
    },
    cpf: {
        type: STRING,
        unique: true
    },
    primary_phone_contact: STRING,
    secondary_phone_contact: STRING,
    date_birth: DATE,
    father_name: STRING,
    mother_name: STRING,
    have_special_needs: BOOLEAN,
    createAt: DATE,
    updatedAt: DATE
},
{underscored: true}
);

module.exports = { Trainee };