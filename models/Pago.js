const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        required: true
    },
    metodoPago: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Pago', PagoSchema);