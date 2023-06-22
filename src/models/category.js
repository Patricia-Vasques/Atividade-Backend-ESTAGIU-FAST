const { connection } = require ('../database/connection')
const { STRING, DATE } = require('sequilize')

const Category = connection.define('category', {
    //colunas do banco de dados -Atividade 2 do trello
    name:STRING,
    created_at: DATE,
    updated_at: DATE
})

module.exports = {
    Category
}