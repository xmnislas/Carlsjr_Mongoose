const db = require("./config/db");
const mongoose = require("mongoose");
const ClienteDAO = require("./dataAccess/clienteDAO");

db.conectar()
  .then(async () => {
    try {
      // Hacer pruebas de las DAO
      // Definir datos de prueba
      const clienteData = {
        nombre: "NombreCliente",
        direccion: "DireccionCliente",
        contacto: "1234567890",
      };

      // Función para ejecutar pruebas
      async function runTests() {
        try {
          // Crear un cliente
          const nuevoCliente = await ClienteDAO.crearCliente(clienteData);
          console.log("Cliente creado:", nuevoCliente);

          // Obtener todos los clientes
          const clientes = await ClienteDAO.obtenerClientes();
          console.log("Clientes:", clientes);

          // Obtener un cliente por ID
          const clientePorId = await ClienteDAO.obtenerClientePorId(
            nuevoCliente._id
          );
          console.log("Cliente por ID:", clientePorId);

          // Actualizar un cliente
          const clienteActualizado = await ClienteDAO.actualizarCliente(
            nuevoCliente._id,
            { nombre: "NuevoNombre" }
          );
          console.log("Cliente actualizado:", clienteActualizado);

          // Eliminar un cliente
        //   const resultadoEliminar = await ClienteDAO.eliminarCliente(
        //     nuevoCliente._id
        //   );
        //   console.log("Resultado eliminar:", resultadoEliminar);

          // Volver a obtener todos los clientes después de eliminar
          const clientesDespuesEliminar = await ClienteDAO.obtenerClientes();
          console.log("Clientes después de eliminar:", clientesDespuesEliminar);
        } catch (error) {
          console.error("Error en las pruebas:", error);
        } finally {
          // Cerrar la conexión a la base de datos al finalizar las pruebas
          mongoose.connection.close();
        }
      }

      // Ejecutar las pruebas
      await runTests();

      db.desconectar();
    } catch (err) {
      console.error("Error en las pruebas: ", err);
    }
  })
  .catch((err) => {
    console.error("Error en la conexion a la base de datos: ", err);
  });