const {
  getOrganisms,
  createOrganism,
  putOrganism,
  deleteOrganism
} = require('../controllers/organisms');

const organismsRouter = require('express').Router();

organismsRouter.get('/', getOrganisms);
organismsRouter.post('/', createOrganism);
organismsRouter.put('/:id', putOrganism);
organismsRouter.delete('/:id', deleteOrganism);

module.exports = organismsRouter;
