const { createOneTrainee, getAllTrainnes, getTraineeById, updateTrainee } = require('../controllers/treinees.controllers');
const { Router } = require('express')

class TraineesRouter {
  routesFromTrainee () {
    const traineeRoutes = Router()
    traineeRoutes.post('/createOneTrainee', createOneTrainee);
    traineeRoutes.get('/getAllTrainnes', getAllTrainnes);
    traineeRoutes.get('/ getTraineeById',  getTraineeById);
    traineeRoutes.put('/updateTrainee', updateTrainee);

    return traineeRoutes
  }
}
module.exports = new TraineesRouter()