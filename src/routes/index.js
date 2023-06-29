const { Router } = require('express')
const { routesFromTrainee } = require('./trainees.routes')
const { routesFromCategory } = require('./category.routes')
const { routesFromCompanies } = require ('./companies.routes')

const routes = new Router()
routes.use('/api', [routesFromCategory(), routesFromTrainee(), routesFromCompanies()])
module.exports = routes