const mongoose = require('mongoose')

const AdministradorSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    nombre:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Administrador',AdministradorSchema)