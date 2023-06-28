const { createNewCompanies, getAllCompanies, getCompaniesById, updateTrainee } = require("../controllers/companies.controllers")
const { Router } = require("express")

class CompaniesRouter{
    routesFromCompanies(){
        const companiesRoutes = Router()
        companiesRoutes.post('createNewCompanies', createNewCompanies);
        companiesRoutes.get('getAllCompanies', getAllCompanies);
        companiesRoutes.get('getCompaniesById', getCompaniesById);
        companiesRoutes.put('updateTrainee', updateTrainee);
        return companiesRoutes
    }
}

module.exports = new CompaniesRouter()