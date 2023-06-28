const { Companies } = require("../models/companies")

class CompaniesController{
//POST
async createNewCompanies(request, response){
    try{
        const {
        cnpj,
        companyName,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rhAnalystName,
        supervisorName
    } = request.body;

        //Para validar a requisição
        if(!companyName|| !cnpj){
            return response.status(400).json({error: "Nome e CNPJ são campos obrigatórios"});
        }

        //Verificando se o CNPJ existe no banco de dados
        const existingCompany = await companiesRoutes.findOne({ cnpj });
        if (existingCompany ){
            return response.status(409).json({error: "CNPJ já cadastrado"})
        }

        //Criando uma nova empresa
        const newCompany = await Companies.create({
            cnpj,
            companyName,
            contact,
            cep,
            address,
            neighborhood,
            city,
            state,
            number,
            complement,
            rhAnalystName,
            supervisorName
        });
        return response.status(201).json(newCompany);
    } catch (error){
        return response.status(500).json({error: "Erro ao criar o cadastro!"})
        }
    }

      //GET
  //Listar toas as empresas do banco de dados
  async getAllCompanies(request, response) {
    const companies = await Companies.findAll();
    return response.status(200).json(companies);
  }

    //GET
  //Exibir as informações especificas de uma empresa
  async getCompaniesById(request, response) {
    const { id } = request.params;
    const companies = await Companies.findByPk(id);

    if(!companies){
      return response.status(404).json({error: "Empresa não encontrada"});
    }

    return response.status(200).json(companies);
  }

    //PUT
    //Atualiza as informações de uma empresa específica
    async updateTrainee(request, response) {
        const { id } = request.params;
        const { 
            cnpj,
            companyName,
            contact,
            cep,
            address,
            neighborhood,
            city,
            state,
            number,
            complement,
            rhAnalystName,
            supervisorName
        } = request.body;
    
          const companies = await Companies.findByPk(id);
    
          if(!companies) {
            return response.status(404).json({error: "Empresa não encontrada "});
          }


          //atualiza as propriedades da empresa
            companies.cnpj = cnpj;
            companies.companyName = companyName;
            companies.contact = contact;
            companies.cep = cep;
            companies.address = address;
            companies.neighborhood = neighborhood;
            companies.city = city;
            companies.state = state;
            companies.number = number;
            companies.complement = complement;
            companies.rhAnalystName = rhAnalystName;
            companies.supervisorName = supervisorName
          
            await companies.save();
          
            return response.status(200).json(companies);
          
          }
}
module.exports = new CompaniesController()