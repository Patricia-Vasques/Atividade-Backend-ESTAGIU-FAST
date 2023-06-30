const { Category } = require('../models/category');
const { Companies } = require('../models/companies');
const { Contract } = require('../models/contract');
const { Trainees } = require('../models/trainees');

class ContractController {
  async createOneContract(request, response) {
    try {
      const {
        traineesId,
        categoryId,
        companiesId,
        startValidity,
        endValidity,
        status,
        remuneration,
        extra
      } = request.body;

      const data = await Contract.create({
        traineesId,
        categoryId,
        companiesId,
        startValidity,
        endValidity,
        status,
        remuneration,
        extra
      })

      return response.status(201).send(data)
    } catch (error) {
      console.error(error.message)
      return response.status(400).send(
        {
          message: "Não foi possível criar um registro de contrato",
          cause: error.message
        })
    }
  }

  async listContracts(request, response) {
    const data = await Contract.findAll(
      {
        include: [
          {
            model: Trainees,
            attributes: ['name', 'primaryPhoneContact']
          },
          {
            model: Companies,
            attributes: ['companyName', 'supervisorName']
          },
          {
            model: Category,
            attributes: ['name']
          }
        ],
        order: [
          ["id", "ASC"]
        ]
      }
    )

    const result = data.map((item) => {
      const rest = JSON.parse(JSON.stringify(item))
      return {
        ...rest,
        traineeName: item.trainees.name,
        primaryPhoneContact: item.trainees.primaryPhoneContact,
        companyName: item.companies.companyName,
        supervisorName: item.companies.supervisorName
      }
    })

    const total = await Contract.count()

    return response.status(200).send({ records: result, total })
  }

  async listOneContract (request, response) {
    const { id } = request.params
    const data = await Contract.findOne(
      {
        where: {id},
        attributes: ["cnpj"]
      }
    )

    return response.status(200).send(data)
  }
}

module.exports = new ContractController()