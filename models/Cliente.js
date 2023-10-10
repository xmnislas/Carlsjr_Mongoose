const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String, 
        required: true
    },
    contacto: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);