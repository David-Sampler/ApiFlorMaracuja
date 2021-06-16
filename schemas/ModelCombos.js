const mongo = require('../connectionDB/conexao')

const vendaCombo = new mongo.Schema(
    {
        cliente: {
            type: String,            
            uppercase: true
        },
        valorTotal: {
            type: Number,
            required: true,
          

        },
        valorEntrada: {
            type: Number,
       
          
        },
        valorDevedor: {
            type: Number,
           
        },

        servicos: {
            type: Array,
         
        },

        sessoes: Number,

        sessoesrealizadas: [],

        contato: {
            type: String
        },

        pagamento: {
            type: String
        },

        entradaParcelas:[{
            valor:Number,
            data:String
        }],

        criado: {
            type: Date,
            default: Date.now()
        }
    }
)

const Combo = mongo.model("VendasCombo", vendaCombo)

module.exports = Combo
