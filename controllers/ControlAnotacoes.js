const anotacao = require('../schemas/ModelAnotacoes')

module.exports = {
    allnotações: async (req, res) => {

        const resp = await anotacao.find()
        res.json(resp)
    },

    insertAnotacao: async (req, res) => {
        const mens = req.body
        console.log(mens)
        const msg = await anotacao.create(req.body)
        res.json(msg)
        console.log("Mensagem crianda com sucesso")

    }
}