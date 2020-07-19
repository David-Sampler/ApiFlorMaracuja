const mongoose = require('../connectionDB/conexao')

const Anotacoes = mongoose.model('anotacao', {
    titulo: String,
    texto: String,
    usuario: String,
    data: String
})

module.exports = Anotacoes
