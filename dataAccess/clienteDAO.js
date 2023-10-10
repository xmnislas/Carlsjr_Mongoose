const Cliente = require('../models/Cliente');


class ClienteDAO {

    static async crearCliente(ClienteData) {
        try {
            // Validar y sanitizar los datos de entrada si es necesario
            const cliente = new Cliente(ClienteData); 
            await cliente.save();  
            return cliente;  
        } catch (error) {
            // Manejar o loguear la excepción de manera más específica
            console.error('Error al crear cliente:', error);
            throw error;
        }
    }

    static async obtenerClientes(limit = 10) {
        try {
            return await Cliente.find().limit(limit);
        } catch (error) {
            console.error('Error al obtener clientes:', error);
            throw error;
        }
    }

    static async obtenerClientePorId(id) {
        try {
            return await Cliente.findById(id);
        } catch (error) {
            console.error('Error al obtener cliente por ID:', error);
            throw error;
        }
    }

    static async actualizarCliente(id, ClienteData) {
        try {
            return await Cliente.findByIdAndUpdate(id, ClienteData, { new: true });
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
            throw error;
        }
    }

    static async eliminarCliente(id) {
        try {
            return await Cliente.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            throw error;
        }
    }
}

module.exports = ClienteDAO;