const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    usuario:{
        type: String,
        required:true
    },
    contrasenia:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Usuario',UsuarioSchema)