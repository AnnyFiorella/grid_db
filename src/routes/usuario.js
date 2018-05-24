const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
const Material = require('../models/Material');

// ruta que devuelve la información del usuario por según el Id de usuario que quieren obtener
router.get('/:id', (req, res, next) => {
    Material.findById(req.params.id, function(err, material){
        if(err){
            res.status(500).json({message:'Se ha producido un error al obtener el usuario'})
        }
        else{
            res.json(material);
        }        
    })
});

// ruta que obtiene los datos almacenados en el esquema Usuario
router.get('/', (req, res) => {
    Material.find(function (err, materials) {
        if(err) {            
            res.status(500).send({message: 'Error al listar los usuarios'})
        }
        else {
            res.json(materials);
        }
    })
});

// ruta que agrega datos al esquema usuario por metodo POST /usuario - POST

router.post('/',(req, res) => {
    const material = new Material(req.body);
    material.save()
    .then(material => {
        res.status(201).json({message: ' El usuario ha sido agregado satisfactoriamente'})
    })
    .catch(err => {
        res.status(400).send({message: 'Se ha producido un error al agregar el usuario '})
    });
});

// actualiza datos al esquema usuario por el método PUT que recibe como parametro el id del usuario
router.put('/:id', (req, res, next) => {
    Material.findById(req.params.id, function (err, material){
        if(!material) {
            return res.status(404).send('No se ha encontrado el usuario');
        } else {
            material.title = req.body.title;
            material.src = req.body.src;
            material.cod_user = req.body.cod_user;
            material.cod_program = req.body.cod_program;
            material.duration = req.body.duration;
            material.user_type = req.body.user_type;
            material.classification = req.body.classification;
            material.cost_center = req.body.cost_center;
            material.genre = req.body.genre;
            material.status = req.body.status;

            material.save()
            .then(material => {
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
    Material.findByIdAndRemove(req.params.id, function (err, material) {
        if(err) {            
            res.status(400).send('Se ha producido un error al eliminar el usuario');
        }
        else{
            res.json('Usuario eliminado satisfactoriamente');            
        }
    });
});

module.exports = router;