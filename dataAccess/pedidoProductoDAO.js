const PedidoProducto = require('../models/PedidoProducto');

class PedidoProductoDAO {
  static async crearPedidoProducto(pedidoProductoData) {
    try {
      const pedidoProducto = new PedidoProducto(pedidoProductoData);
      return await pedidoProducto.save();
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPedidoProductoPorId(id) {
    try {
      return await PedidoProducto.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPedidosProductos(limit = 10) {
    try {
      return await PedidoProducto.find().limit(limit);
    } catch (error) {
      throw error;
    }
  }

  static async actualizarPedidoProducto(id, pedidoProductoData) {
    try {
      return PedidoProducto.findByIdAndUpdate(id, pedidoProductoData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async eliminarPedidoProducto(id) {
    try {
      return PedidoProducto.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PedidoProductoDAO;
