const Combo = require('../schemas/ModelCombos')

   const data = new Date().toLocaleString()
let sessoes = []
let valor
module.exports = {

    allCombo: async (req, res) => {
        const resultado = await Combo.find()
        res.json(resultado)
    },

    insertCombo: async (req, res) => {
     

        const { cliente, valorTotal, valorEntrada, valorDevedor, contato, pagamento, servicos, sessoes } = req.body
        try {
            const bronze = await Combo.create({
                cliente,
                valorTotal,
                valorEntrada,
                valorDevedor,
                contato,
                pagamento,
                servicos,
                sessoes,
                entradaParcelas:[{valor:valorEntrada,data:data}]
            })
            //const bronze = await Combo.create(req.body)
            return res.json(bronze)
        } catch (error) {
            res.json(error)
            console.log(error)
        }

    },

    atualizarCombo: async (req, res) => {
        const id = req.params.id
        let dados2 = req.body.realizada
        sessoes.push(dados2)
        try {
            const dados = await Combo.findAndUpdate(id, {
                sessoesrealizadas: sessoes,
                
            })
            res.json(sessoes)
        } catch (error) {
            res.json(erro)
        }

    },


    filterCombor: async (req, res) => {
        let { cliente } = req.body
        console.log(cliente)
        try {
            let filtro = await Combo.find({ cliente: { $regex: req.body.cliente } });
            //let filtro = await Combo.findOne({cliente});
            return res.json(filtro)
        } catch (error) {
            console.log(error)
            res.json("Erro na pesquisa")
        }
    },

    atualizarVenda: async (req, res) => {

        const id = req.params.id
        console.log(id)
        try {

            let usuario = await Combo.findById(id)
            console.log(usuario.valorEntrada)

            let valorEntrada2 = usuario.valorEntrada + req.body.valor
            let valorDevedor2 = usuario.valorDevedor - req.body.valor   


            const dado = await Combo.findOneAndUpdate({ _id: id },
                {
                    $set: {
                        valorEntrada: valorEntrada2,
                        valorDevedor: valorDevedor2,
                       
                        
                    },
                    $push: { entradaParcelas: [{valor:req.body.valor,data:data}] }

                })

            res.json(dado, "chegando aqui")



        } catch (error) {
            console.log(error, "tá escroto")
            res.json(error)
        }
    }

}