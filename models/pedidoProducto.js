const mongoose = require('mongoose');

const PedidoProductoSchema = new mongoose.Schema({
  idPedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pedido',
    required: true,
  },
  idProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('PedidoProducto', PedidoProductoSchema);
