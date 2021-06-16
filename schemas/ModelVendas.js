const mongo = require('../connectionDB/conexao')
const vendas = new mongo.Schema(

    {
        usuario: {
            type: String,
            
        },

        cliente: {
            nome: String,           
            telefone: String,
            email: String,
        },

        servico: Array,

        totalVenda: {
            type: Number
        },

        pagamento: {
            type: String
        },

        momento: {
            date: String,
            hora: String
        },

        criado: {
            type:Date,
            default:Date.now
        }



    }
)

const venda = mongo.model("venda", vendas)

module.exports = venda