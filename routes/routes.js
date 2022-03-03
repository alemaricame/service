module.exports = (app) => {
    var router = require("express").Router();

    const users = require("../controllers/users.js");

    router.get('/example', (req, res) => {
        res.status(200).send('Enviado')
    });


    router.post('/ingresar', users.ingresar);
    router.get('/', users.users);

    router.get('/editPassword', users.edit_user);
    router.get('/clients', users.clientsAll);
    router.post('/clients/vendedor', users.clientsVendedor);
    router.post('/users/edit', users.editUser);
    router.post('/users/delete', users.deleteUser);
    router.post('/clients/edit', users.editClient);
    router.post('/clients/delete', users.deleteClient);
    router.post('/clients/add', users.addClient);

    router.get('/list-cost', users.listCost);

    

    app.use("/api", router);
}