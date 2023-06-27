const { connection } = require ('../database/connection')
const { STRING, DATE } = require('sequelize')

const Category = connection.define('category', {
    //colunas do banco de dados -Atividade 2 do trello
    name:STRING,
    createdAt: DATE,
    updatedAt: DATE
},
{underscored: true}//Serve para escrevermos no banco de dados em Snake Case, 
                    //podendo persistir o camelCase do JS

);

module.exports = {
    Category
}