const getProjects = (organismMap) => {
  return [
    {
      name: 'Salvar Sierra Morena',
      description: 'Recuento de ejemplares de Oso',
      objectives:
        'Conocer el estado de las especies de Oso que habitan Sierra Morena',
      organism: organismMap['Ursus arctos'],
      projectFunding: 10400,
      currency: 'EUR',
      responsable: 'Pepito',
      contact: 789456123
    },
    {
      name: 'Tóxinas en el medio ambiente',
      description: 'La importancia del analisis medio ambiental',
      objectives: 'Analizar las tóxinas generadas por la bacteria E. coli',
      organism: organismMap['Escherichia coli'],
      projectFunding: 12000,
      currency: 'USD',
      responsable: 'Luisita',
      contact: 321654987
    }
  ];
};

module.exports = getProjects;
