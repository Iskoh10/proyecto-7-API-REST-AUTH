const { Organism } = require('../models/organisms');

const createOrganism = async (req, res, next) => {
  try {
    const organism = new Organism(req.body);

    const organismDuplicated = await Organism.findOne({
      specie: req.body.specie
    });

    if (organismDuplicated) {
      return res.status(400).json('Ese organismo ya existe');
    }

    const organismSaved = await organism.save();
    return res.status(201).json(organismSaved);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const getOrganisms = async (req, res, next) => {
  try {
    const organisms = await Organism.find();
    return res.status(200).json(organisms);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const putOrganism = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newOrganism = new Organism(req.body);
    newOrganism._id = id;

    const organismUpdated = await Organism.findByIdAndUpdate(id, newOrganism, {
      new: true
    });

    return res.status(200).json(organismUpdated);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const deleteOrganism = async (req, res, next) => {
  try {
    const { id } = req.params;
    const organismDeleted = await Organism.findByIdAndDelete(id);
    return res.status(200).json(organismDeleted);
  } catch (error) {
    return res.status(400).json('error');
  }
};

module.exports = { createOrganism, getOrganisms, putOrganism, deleteOrganism };
