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
    router.post('/users/edit', users.editUser);
    router.post('/users/delete', users.deleteUser);

    

    app.use("/api", router);
}