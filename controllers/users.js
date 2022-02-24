const db = require("../models");
const users = db.connect;
const clients = require("../models/clients");
const costList = require("../models/list-cost");

exports.users = async (req, res) => {
    console.log('users all')

    users.find().then((data,err)=> {
        console.log(data)
        if(err){
            res.status(500).send({ success: false, message: 'Error al cargar los datos' })
        }else {
            res.status(200).send({ success: true, data: data });
        }
    })
}

exports.edit_user = (req, res) => {
    console.log('req edit', req.body)
    users.updateMany({},{$set:{'Password': 'Gahp2022'}}).then(response => {
        console.log(response)
        if(response.n === 1){
            res.status(200).send({
                success: true,
                data: response
            });
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}

exports.edit_user = (req, res) => {
    console.log('req edit', req.body)
    users.updateOne({_id: req.body._id}, {phone: req.body.phone, date: req.body.date}).then(response => {
        console.log(response)
        if(response.n === 1){
            users.findOne({no_personal: req.body.no_personal}).then(response => {
                res.status(200).send({
                    success: true,
                    data: response
                });
            })
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}


exports.editUser = (req, res) => {
    console.log('req edit', req.body)
    users.updateOne({_id: req.body._id},
        {
            Nombre: req.body.Nombre,
            Correo: req.body.Correo,
            Rol: req.body.Rol,
            Telefono: req.body.Telefono,
            Zona: req.body.Zona
        }).then(response => {
        if(response.n === 1){
            res.status(200).send({
                success: true,
                message: 'Editado correctamente.'
            });
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}

exports.deleteUser = (req, res) => {
    console.log('req edit', req.body)
    users.findOneAndDelete({_id: req.body._id}).then(response => {
        console.log(response)
        if(response.n === 1){
            res.status(200).send({
                success: true,
                data: response
            });
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}

exports.register_users = (req, res) => {
    //console.log('register user', req.body.photo.changingThisBreaksApplicationSecurity)
    const num_empleado = req.body.num_empleado;
    const data_user = req.body;

    users.findOne({ numero_personal: num_empleado }).then((data) => {
        if (data) {
            console.log('data', data['_id'])

            res.status(200).send({success: true, data: data});   
            
        } else {
            res.status(500).send({ status: false, message: 'Este número de empelado no existe pide que sea agregado para entrar a la aplicación' })
        }
    })
}


exports.login = (req, res) => {
    const data_user = req.body;
    console.log('data user', data_user.num_empleado)
    clients.findOne({ no_personal: data_user.num_empleado }).then(data => {
        console.log('data', data)
        if (data) {
            if(data.password === parseInt(data_user.password)){
                res.status(200).send({ success: true, data: data });
            }else{
                res.status(500).send({ success: false, message: 'La contraseña es incorrecta' })
            }
        } else {
            res.status(500).send({ success: false, message: 'El número de personal es incorrecto' })
        }
    })
}

exports.ingresar = (req, res) => {
    const data_user = req.body;
    console.log('data user', data_user.email)
    users.findOne({ Correo: data_user.email}).then(data => {
        console.log('data resp', data)
        if (data) {
            if(data['Password'] === data_user.password){
                res.status(200).send({ success: true, data: data });
            }else{
                res.status(500).send({ success: false, message: 'La contraseña es incorrecta' })
            }
        } else {
            res.status(500).send({ success: false, message: 'El correo es incorrecto' })
        }
    })
}


exports.clientsAll = (req, res) => {
    
    clients.find().then(data => {
        console.log('data resp', data)
        if (data) {
            res.status(200).send({ success: true, data: data });

        } else {
            res.status(500).send({ success: false, message: 'El correo es incorrecto' })
        }
    })
}


exports.clientsVendedor = (req, res) => {
    console.log('clientes vendedor...', req.body._id)
    clients.find({IdVendedor: req.body._id}).then(data => {
        console.log('data resp', data)
        if (data) {
            res.status(200).send({ success: true, data: data });

        } else {
            res.status(500).send({ success: false, message: 'El correo es incorrecto' })
        }
    })
}


exports.editClient = (req, res) => {
    console.log('req edit', req.body)
    clients.updateOne({_id: req.body._id},
        {
            CLIENTE: req.body.CLIENTE,
            DIRECCION: req.body.DIRECCION,
            IdVendedor: req.body.IdVendedor,
            RFC: req.body.RFC,
            Vendedor: req.body.Vendedor,
            Zona: req.body.Zona,
            idVendedor: req.body.idVendedor,
            contacto: req.body.contacto,
            estado: req.body.estado,
            numero: req.body.numero


        }).then(response => {
        if(response.n === 1){
            res.status(200).send({
                success: true,
                message: 'Editado correctamente.'
            });
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}

exports.deleteClient = (req, res) => {
    console.log('req edit', req.body)
    clients.findOneAndDelete({_id: req.body._id}).then(response => {
        console.log(response)
        if(response.n === 1){
            res.status(200).send({
                success: true,
                data: response
            });
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}

exports.listCost = (req, res) => {
    console.log('req edit', req.body)
    costList.find().then(response => {
        console.log('response cost', response)
        if (response) {
            res.status(200).send({ success: true, data: response });
        } else {
            res.status(500).send({ success: false, message: 'No se encontraron datos.' })
        }
    })
}