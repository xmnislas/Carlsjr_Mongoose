const db = require('./config/db');
const Producto = require('./models/Producto');
const ProductoDAO = require('./dataAccess/productoDAO');
const Pedido = require('./models/Pedido');
const PedidoDAO = require('./dataAccess/pedidoDAO');
const Pago = require('./models/Pago');
const PagoDAO = require('./dataAccess/pagoDAO');

db.conectar()
    .then(async () => {
        try {
            
            // Hacer pruebas de las DAO

            db.desconectar();

        } catch (err) {
            console.error('Error en las pruebas: ', err);
        }
    })
    .catch(err => {
        console.error('Error en la conexion a la base de datos: ', err);
    });