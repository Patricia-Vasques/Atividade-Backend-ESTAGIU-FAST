const { connection } = require ('../database/connection')
const { STRING, DATE } = require('sequilize')

const Category = connection.define('category', {
    //colunas do banco de dados -Atividade 2 do trello
    name:STRING,
    created_at: DATE,
    updated_at: DATE
})

//Atividade 3
//Criando as rotas para cadastrar uma nova categoria
Router.post('/categories', async(req, res) =>{
    try{
        const { name } = req.body;

        const newCategory = await Category.create({
            name,
            created_at: new Date(),
            updated_at: new Date()
        })

        res.status(201).json(newCategory);
    } catch (error){
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar a categoria.'})
}
    });

    //Rota para listar todas as categorias
    Router.get('/categories', async(req, res) =>{
        try{
            //fazendo a busca por todas as categorias no banco de dados
            const categories = await Category.findAll();

            res.json(categories);
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao listar as categorias.'})
        }
        });

module.exports = {
    Category
}