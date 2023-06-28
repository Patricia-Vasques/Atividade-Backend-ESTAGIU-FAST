const { Category } = require('../models/category')

class CategoryController {
  //POST
  async createOneCategory(request, response) {
    
    const data = await Category.create({ 
      name: "Juridico"
     })
    return response.status(201).send(data)
  }

  //GET
  async listOneCategory(request, response) {
    const data = await Category.findAll();

    return response.status(200).send(data)
  }
}
module.exports = new CategoryController()