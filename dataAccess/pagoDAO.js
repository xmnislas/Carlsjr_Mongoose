const Pago = require('../models/Pago');

class PagoDAO{
    static async crearPago(pagoData){
        try{
            const pago = new Pago(pagoData);
            return await pago.save();
        }catch(error){
            throw error;
        }
    }

    static async obtenerPagoPorId(id){
        try{
            return await Pago.findById(id);
        }catch(error){
            throw error;
        }
    }

    static async obtenerPagos(limit = 10){
        try{
            return await Pago.find().limit(limit);
        }catch(error){
            throw error;
        }
    }

    static async actualizarPago(id, pagoData){
        try{
            return Pago.findByIdAndUpdate(id, pagoData, {new: true});
        }catch(error){
            throw error;
        }
    }

    static async eliminarPago(id){
        try{
            return Pago.findByIdAndDelete(id);
        }catch(error){
            throw error;
        }
    }
}

module.exports = PagoDAO;