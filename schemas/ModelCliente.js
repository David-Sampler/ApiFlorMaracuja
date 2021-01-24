const mongo = require('../connectionDB/conexao')

const cli = new mongo.Schema(
    {
       
        nome: {
            type: String,
            uppercase: true
        },     

        contato: Array,

        nascimento: String,
       
        criado: {
            type:Date,
            default:Date.now()
        }
    })


const cliente = mongo.model("cliente",cli)

module.exports = cliente