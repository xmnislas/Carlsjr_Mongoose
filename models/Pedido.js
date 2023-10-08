const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    fecha: {
        type: String, 
        required: true
    },
    idPago: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pago',
        required: true
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema);