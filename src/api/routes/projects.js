const {
  createProject,
  putProject,
  getProjects,
  deleteProject
} = require('../controllers/projects');

const projectsRouter = require('express').Router();

projectsRouter.get('/', getProjects);
projectsRouter.post('/', createProject);
projectsRouter.put('/:id', putProject);
projectsRouter.delete('/:id', deleteProject);

module.exports = projectsRouter;
