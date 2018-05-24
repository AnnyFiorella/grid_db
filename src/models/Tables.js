// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const Table = new Schema({
    id: { type: Number},
    table_name: { type: String},
    types: []
},{
    collection: 'tables'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Table', Table);