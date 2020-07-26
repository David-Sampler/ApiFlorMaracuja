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

    },

    apagarAnotacao: async (req, res) => {
        const id = req.params._id
        await anotacao.deleteOne(id)
        console.log("Anotação deletada")
        res.json("Excluido com sucesso")
    }
}