const { Project } = require('../models/projects');

const createProject = async (req, res, next) => {
  try {
    const project = new Project(req.body);

    const nameDuplicated = await Project.findOne({ name: req.body.name });

    if (nameDuplicated) {
      return res.status(400).json('Ese proyecto ya existe');
    }

    const projectSaved = await project.save();
    return res.status(201).json(projectSaved);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const putProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newProject = new Project(req.body);
    newProject._id = id;
    const projectUpdated = await Project.findByIdAndUpdate(id, newProject, {
      new: true
    });
    return res.status(200).json(projectUpdated);
  } catch (error) {
    return res
      .status(400)
      .json('Error, no se ha podido actualizar el proyecto');
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectDeleted = await Project.findByIdAndDelete(id);
    return res.status(200).json(projectDeleted);
  } catch (error) {
    return res.status(400).json('Error, no se ha podido eliminar el proyecto');
  }
};

module.exports = { createProject, getProjects, putProject, deleteProject };
