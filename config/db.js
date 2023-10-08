const mongoose = require ('mongoose');

const config = {
    url: 'mongodb://127.0.0.1:27017/carlsjr',
    optons: {
        usenewUrlParser : true,
        useUnifiedTopology: true
    }
}

function conectar(){
    return mongoose.connect(config.url, config.optons);
}

function desconectar(){
    return mongoose.disconnect();
}

module.exports = {conectar, desconectar};