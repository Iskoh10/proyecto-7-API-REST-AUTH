const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    objectives: { type: String, required: true },
    projectFunding: { type: number, required: true, min: 0 },
    currency: { type: String, required: true, enum: ['EUR', 'USD', 'GBP'] },
    responsable: { type: String, required: true },
    contact: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'projects'
  }
);

const Issue = mongoose.model('projects', projectSchema, 'projects');

module.exports = { Issue };
