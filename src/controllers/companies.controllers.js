const { Companies } = require("../models/companies")

class CompaniesController{
//POST
async createNewCompanies(request, response){
    const data = await Companies.create({

    })
    return response.status(201).send(data)
}
}
module.exports = new CompaniesController()