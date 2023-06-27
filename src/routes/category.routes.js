const { Router } = require('express')
const { createOneCategory, listOneCategory } = require('../controllers/category.controllers')

class CategoryRoutes {
  routesFromCategory () {
    const categoryRoutes = Router();
    categoryRoutes.post('/createOneCategory', createOneCategory);
    categoryRoutes.get('/listOneCategory', listOneCategory);

    return categoryRoutes
  }
}

module.exports = new CategoryRoutes()