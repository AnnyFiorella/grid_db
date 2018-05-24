const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
const Table = require('../models/Table');

// ruta que devuelve la información del usuario por según el Id de usuario que quieren obtener
router.get('/:id', (req, res, next) => {
    Table.findById(req.params.id, function(err, table){
        if(err){
            res.status(500).json({message:'Se ha producido un error al obtener el usuario'})
        }
        else{
            res.json(table);
        }        
    })
});

// ruta que obtiene los datos almacenados en el esquema Usuario
router.get('/', (req, res) => {
    Table.find(function (err, tables) {
        if(err) {            
            res.status(500).send({message: 'Error al listar los usuarios'})
        }
        else {
            res.json(tables);
        }
    })
});

// ruta que agrega datos al esquema usuario por metodo POST /usuario - POST

router.post('/',(req, res) => {
    const table = new Table(req.body);
    table.save()
    .then(table => {
        res.status(201).json({message: ' El usuario ha sido agregado satisfactoriamente'})
    })
    .catch(err => {
        res.status(400).send({message: 'Se ha producido un error al agregar el usuario '})
    });
});

// actualiza datos al esquema usuario por el método PUT que recibe como parametro el id del usuario
router.put('/:id', (req, res, next) => {
    Table.findById(req.params.id, function (err, table){
        if(!table) {
            return res.status(404).send('No se ha encontrado el usuario');
        } else {
            table.table_name = req.body.table_name;
            table.types = req.body.types;

            table.save()
            .then(table => {
                res.status(200).json('Usuario Actualizado completamente');
            })
            .catch(err => {
                res.status(400).send('Se ha producido un error al actualizar los datos del usuario');
            });
        }
    })
});

// elimina el dato usuario de la base de datos por el método PUT que recibe como parametro el id del usuario
router.delete('/:id', (req, res, next) => {
    Table.findByIdAndRemove(req.params.id, function (err, table) {
        if(err) {            
            res.status(400).send('Se ha producido un error al eliminar el usuario');
        }
        else{
            res.json('Usuario eliminado satisfactoriamente');            
        }
    });
});