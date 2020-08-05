const modelVendas = require("../schemas/ModelVendas")
const { model } = require("../schemas/ModelVendas")

module.exports = {

    allVendas: async (req, res) => {

        try {
            let vendas = await modelVendas.find({})
            res.json(vendas)
            console.log(vendas)

        } catch (error) {
            console.log(error)
        }

    },

    inserirVenda: async (req, res) => {

        try {
            let venda = req.body
            console.log(venda)

            await new modelVendas({
                usuario: req.body.usuario,
                cliente: req.body.cliente,
                servico: req.body.servico,
                totalVenda: req.body.totalVenda,
                pagamento: req.body.pagamento,
                momento: req.body.momento,
                criado: new Date()

            }).save()

            console.log("Venda com sucess")

        } catch (error) {
            console.log(error)
        }
        res.json({ msg: "Vendas Cadastrada com sucesso" })
    },

    excluirVenda: async (req, res) => {
        console.log(req.params.id)
        try {
            let del = await modelVendas.deleteOne(req.params._id)
            console.log("excluido com sucess")
            res.json({ msg: "Excluido com sucesso" })

        } catch (error) {
            console.log(error)
        }


    },

    updateVendas: async (req, res) => {


        let dados = await modelVendas.updateOne(req.params._id, {
            usuario: req.body.usuario,
            cliente: req.body.cliente,
            servico: req.body.servico
        })



        res.json({ msg: "Update Realizado com sucesso" })
    },

    OneVendas: async (req, res) => {
        const id = req.params.id
        console.log(id)
        try {
            let venda = await modelVendas.findOne({ _id: id })
            res.json(venda)
            console.log(venda)

        } catch (error) {
            console.log(error)
        }

    }

}