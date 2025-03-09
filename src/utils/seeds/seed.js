require('dotenv').config();
const mongoose = require('mongoose');
const users = require('../../data/users');
const { User } = require('../../api/models/users');
const { Organism } = require('../../api/models/organisms');
const organisms = require('../../data/organisms');
const { Project } = require('../../api/models/projects');
const getProjects = require('../../data/projects');
const getUsers = require('../../data/users');

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    // Eliminar colecciones previas
    await User.collection.drop();
    console.log('Usuarios eliminados');

    await Organism.collection.drop();
    console.log('Organismos eliminados');

    await Project.collection.drop();
    console.log('Proyectos eliminados');

    // Organismos

    const insertedOrganisms = await Organism.insertMany(organisms);
    console.log('Organismos introducidos');

    const organismMap = {};
    insertedOrganisms.forEach((org) => {
      organismMap[org.specie] = org._id;
    });

    // Proyectos
    const projects = getProjects(organismMap);

    const insertedProjects = await Project.insertMany(projects);
    console.log('Proyectos introducidos');

    const projectsMap = {};
    insertedProjects.forEach((project) => {
      projectsMap[project.name] = project._id;
    });

    // Usuarios
    const users = getUsers(projectsMap);
    await User.insertMany(users);
    console.log('Usuarios introducidos');

    await mongoose.disconnect();
    console.log('Desconectamos de la BBDD');
  } catch (error) {
    console.log('No se ha podido lanzar la semilla');
  }
};

lanzarSemilla();
