const mongoose = require('mongoose');

const organismSchema = new mongoose.Schema(
  {
    kingdom: {
      type: String,
      required: true,
      enum: ['Monera', 'Protista', 'Fungi', 'Plantae', 'Animalia']
    },
    specie: { type: String, required: true },
    bsl: { type: Number, required: true, min: 1 },
    department: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'organisms'
  }
);

const Organism = mongoose.model('organisms', organismSchema, 'organisms');

module.exports = { Organism };
