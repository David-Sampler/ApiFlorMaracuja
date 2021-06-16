const mongo = require('../connectionDB/conexao')

const vendaBronze = new mongo.Schema(
    {
        cliente:{
            type:String,
            required:true,
            uppercase:true
        },
        valor:{
            type:Number,
            required:true
        },
        contato:{
            type:String
        },
        pagamento:{
            type:String
        },
        
        criado:{
            type:Date,
            default:Date.now()
        }
    }
)

const bronze = mongo.model("VendasBronze",vendaBronze)

module.exports = bronze
