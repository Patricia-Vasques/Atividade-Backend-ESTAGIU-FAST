const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./database/connection')
class Server {
    constructor (
        server = express()
    ) {
        this.middlewares(server)
        this.initializeServer(server)
        this.database()
    }

    async  middlewares(app){
        // Utilização da função cors dentro do servidor
        app.use(cors()) 
        // Habilitar entrada de dados como json no servidor
        app.use(express.json()) 
    }
    
    async initializeServer(app) {
        // Valor da porta do servidor
        const PORT = 3333
        app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`))
    }

    async database() {
        try {
            await connection.authenticate();
            console.log('Conexão bem sucedida!');
        } catch (error) {
            console.error('Não foi possível conectar no banco de dados.', error);
        }
    }
}

module.exports = { Server }