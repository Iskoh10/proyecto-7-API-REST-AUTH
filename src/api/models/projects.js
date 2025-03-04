const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    objectives: { type: String, required: true },
    projectFunding: { type: Number, required: true, min: 0 },
    currency: { type: String, required: true, enum: ['EUR', 'USD', 'GBP'] },
    responsable: { type: String, required: true },
    contact: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'projects'
  }
);

const Project = mongoose.model('projects', projectSchema, 'projects');

module.exports = { Project };
