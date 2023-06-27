const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./database/connection')
const routes = require('./routes')

class Server {
    constructor (
        // Argumento do constructor auto iniciado da aplicação para usarmos as devidas funções do express
        server = express()
    ) {
        this.middlewares(server) // Instância do argumento da função para a função middlewares
        this.database()  // Instância da função database
        this.allRoutes(server) // Rotas da aplicação
        this.initializeServer(server) // Instância da função initializeServer
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
    
    async allRoutes(app) {
        app.use(routes)
      }
    }


module.exports = { Server }