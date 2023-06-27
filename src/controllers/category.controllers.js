const { Category } = require('../models/category')

class CategoryController {
  async createOneCategory(request, response) {
    
    const data = await Category.create({ 
      name: "Juridico"
     })
    return response.status(201).send(data)
  }

  async listOneCategory(request, response) {
    const data = await Category.findAll();

    return response.status(200).send(data)
  }
}
module.exports = new CategoryController()