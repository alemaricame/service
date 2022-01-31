
const mongoose = require('mongoose');

const { Schema } = mongoose;

const clientsSchema = new Schema(
{
    CLIENTE: { type: String, required: true },
    DIRECCION: { type: String, required: true },
    RFC: { type: String, required: true },
    Zona: { type: String, required: true },
    Vendedor: { type: String, required: true },
    IdVendedor:  { type: mongoose.Schema.Types.ObjectId,ref: 'users', required: true}
},
  {
    timestamps: true
  }
);

const model = mongoose.model('clients', clientsSchema);

module.exports = model;