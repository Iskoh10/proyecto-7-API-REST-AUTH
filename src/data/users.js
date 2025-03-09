const getUsers = (projectsMap) => {
  return [
    {
      name: 'Juanito',
      email: 'juanito@gmail.com',
      password: 'juanito123'
    },
    {
      name: 'Pepito',
      email: 'pepito@gmail.com',
      password: 'pepito123',
      nameProjects: projectsMap['Salvar Sierra Morena']
    },
    {
      name: 'Luisita',
      email: 'luisita@gmail.com',
      password: 'luisita123',
      nameProjects: projectsMap['Tóxinas en el medio ambiente']
    }
  ];
};

module.exports = getUsers;
