const { Trainees } = require('../models/trainees')

class TraineesController {
    //POST
    //Cadastrar um novo estagiário no banco de dados
  async createOneTrainee(request, response) {
    const { name, email, rg, cpf, primaryPhoneContact, secondaryPhoneContact,
      dateBirth, fatherName, motherName, haveSpecialNeeds } = request.body;
      
    const data = await Trainees.create({
      name, email, rg, cpf, primaryPhoneContact, secondaryPhoneContact,
      dateBirth, fatherName, motherName, haveSpecialNeeds
    })
    return response.status(201).send(data)
  }

  //GET
  //Listar todos os estagiários do banco de dados
  async getAllTrainnes(request, response) {
    const trainees = await Trainees.findAll();
    return response.status(200).json(trainees);
  }

  //GET
  //Exibir as informações especificas de um estagiário
  async getTraineeById(request, response) {
    const { id } = request.params;
    const trainee = await Trainees.findByPk(id);

    if(!trainee){
      return response.status(404).json({error: "Estagiário não encontrado"});
    }

    return response.status(200).json(trainee);
  }

  //PUT
  //Atualiza as informações de um estagiário específico
  async updateTrainee(request, response) {
    const { id } = request.params;
    const { name, email, rg, cpf, primaryPhoneContact, secondaryPhoneContact,
      dateBirth, fatherName, motherName, haveSpecialNeeds} = request.body;

      const trainee = await Trainees.findByPk(id);

      if(!trainee) {
        return response.status(404).json({error: "Estagiáro não encontrado "});
      }
    // Atualiza as propriedades do estagiário
  trainee.name = name;
  trainee.email = email;
  trainee.rg = rg;
  trainee.cpf = cpf;
  trainee.primaryPhoneContact = primaryPhoneContact;
  trainee.secondaryPhoneContact = secondaryPhoneContact;
  trainee.dateBirth = dateBirth;
  trainee.fatherName = fatherName;
  trainee.motherName = motherName;
  trainee.haveSpecialNeeds = haveSpecialNeeds;

  await trainee.save();

  return response.status(200).json(trainee);
}
}
module.exports = new TraineesController()