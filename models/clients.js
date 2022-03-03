
const mongoose = require('mongoose');

const { Schema } = mongoose;

const clientsSchema = new Schema(
{
    Cliente: { type: String, required: true },
    Direccion: { type: String, required: true },
    RFC: { type: String, required: true },
    Zona: { type: String, required: true },
    Vendedor: { type: String, required: true },
    IdVendedor:  { type: mongoose.Schema.Types.ObjectId,ref: 'users', required: true},
    Contacto: { type: String},
    Telefono: { type: String},
    Estado: { type: String},
    Correo: { type: String},

},
  {
    timestamps: true
  }
);

const model = mongoose.model('clients', clientsSchema);

module.exports = model;