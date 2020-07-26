const mongoose = require('../connectionDB/conexao')

const Anotacoes = mongoose.model('anotacao', {
    titulo: String,
    texto: String,
    usuario: String,
    data: String,
    criado: {
        type: Date,
        default: Date.now
    }
})

module.exports = Anotacoes
