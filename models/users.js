module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            Nombre: { type: String, required: true },
            Correo: { type: String, required: true },
            Zona: { type: String, required: true },
            Telefono: { type: String, required: true },
            Password: { type: String, required: true },
            Rol: { type: String, required: true }

        }
    )

    
  const createUser = mongoose.model("users", schema);

  return createUser;
}
