const Pedido = require('../models/Pedido');

class PedidoDAO{
    static async crearPedido(pedidoData){
        try{
            const pedido = new Pedido(pedidoData);
            return await pedido.save();
        }catch(error){
            throw error;
        }
    }

    static async obtenerPedidoPorId(id){
        try{
            return await Pedido.findById(id);
        }catch(error){
            throw error;
        }
    }

    static async obtenerPedidos(limit = 10){
        try{
            return await Pedido.find().limit(limit);
        }catch(error){
            throw error;
        }
    }

    static async actualizarPedido(id, pedidoData){
        try{
            return Pedido.findByIdAndUpdate(id, pedidoData, {new: true});
        }catch(error){
            throw error;
        }
    }

    static async eliminarPedido(id){
        try{
            return Pedido.findByIdAndDelete(id);
        }catch(error){
            throw error;
        }
    }
}

module.exports = PedidoDAO;