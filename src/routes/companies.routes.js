const { createNewCompanies } = require("../controllers/companies.controllers")
const { Router } = require("express")

class CompaniesRouter{
    routesFromCompanies(){
        const companiesRoutes = Router()
        companiesRoutes.post('createNewCompanies', createNewCompanies);

        return companiesRoutes
    }
}

module.exports = new CompaniesRouter()