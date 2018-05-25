// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const Material = new Schema({
    id: { type: Number},
    title: { type: String},
    src: { type: String},
    cod_material: { type: Number},
    cod_program: { type: Number},
    duration: { type: String},
    material_type: { type: String},
    classification: { type: String},
    num_classification: { type: String},
    broadcastPrice: { type: Number},
    broadcastCredit: { type: Number},
    stars: { type: String},
    startValidity: { type: String},
    endValidity: { type: String},
    cost_center: { type: String},
    num_center: { type: String},
    genre: { type: String},
    status: { type: Boolean},
    canned: { type: Boolean}
},{
    collection: 'materials'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Material', Material);