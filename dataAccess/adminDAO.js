const Admin = require('../models/Admin')

class AdminDAO {

    static async crearAdmin(adminData) {
        try {
            const admin = new Admin(adminData)
        } catch (error) {
            throw error;
        }
    }

    static async obtenerAdministradores(limit = 10) {
        try {
            return await Admin.find().limit(limit)
        } catch (error) {
            throw error;
        }
    }

    static async obtenerAdminPorId(id) {
        try {
            return await Admin.findById(id)
        } catch (error) {
            throw error;
        }
    }

    static async actualizarAdmin(id, adminData) {
        try {
            return Admin.findByIdAndUpdate(id, adminData, { new: true })
        } catch (error) {
            throw error;
        }
    }

    static async eliminarAdministrador(id){
        try{
            return Admin.findByIdAndDelete(id)
        }catch(error){
            throw error
        }
    }
}

module.exports = AdminDAO;