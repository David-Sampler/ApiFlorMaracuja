const modelVendas = require("../schemas/ModelVendas")
const enviarEmail = require('../setup/email')

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

            let vendafirmada = await new modelVendas({
                usuario: req.body.usuario,
                cliente: req.body.cliente,
                servico: req.body.servico,
                totalVenda: req.body.totalVenda,
                pagamento: req.body.pagamento,
                momento: req.body.momento,
             
            })

            vendafirmada.save()
            
            //vendafirmada.servico.forEach(element => {
             //   vendas.push(element.tipo)
            //});

            console.log(venda)

            res.json(vendafirmada)
            //enviarEmail(vendas, vendafirmada.totalVenda, vendafirmada.cliente.email)

        } catch (error) {
            console.log(error)
        }

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

    },

    filtroUsuario: async (req, res) => {

        let total = 0

        const { cliente, usuario, valor1, valor2 } = req.body
        console.log(cliente)
        let detalhe = await modelVendas.find({
            $or: [
                { 'cliente.nome': cliente },

            ]
            /*'cliente.nome': {
                $in: [
                    cliente
                ]
            }*/

        }, { 'cliente.nome': 1 })

        detalhe.forEach((res) => {
            total += res.totalVenda
            console.log(total)
            return total
        })
        console.log(detalhe.length)
        res.json(detalhe)
    }

}