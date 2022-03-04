
const mongoose = require('mongoose');

const { Schema } = mongoose;

const costListSchema = new Schema(
{
    tipo: { type: String, required: true },
    instrumento: { type: String, required: true },
    codigo: { type: String, required: true },
    rango: { type: String, required: true },
    servicio: { type: String, required: true },
    lugar_servicio:  { type: String},
    normas: { type: String},
    alto: {type: Number},
    medio: {type: Number},
    bajo: {type: Number}

},
  {
    timestamps: true
  }
);

const model = mongoose.model('calibraciones', costListSchema);

module.exports = model;