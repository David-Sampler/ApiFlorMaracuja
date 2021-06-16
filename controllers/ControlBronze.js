const Bronze = require('../schemas/ModelBronze')

module.exports = {
    
    allvendas: async (req, res) => {

         try {
            const todos = await Bronze.find()
            return res.json(todos)
         } catch (error) {
             res.json("Consulta falha")
         }
    },

    filtrobronze: async (req, res) => {

        let { cliente } = req.body
        console.log(cliente)
        

        try {
            let filtro = await Bronze.find({ cliente: { $regex: cliente } });
            res.json(filtro)
        } catch (error) {
            res.json(error)
            console.log(error)
        }


    },

    insertVenda: async (req, res) => {

        const { cliente, valor,contato, pagamento } = req.body
        console.log(req.body)
        try {

            let venda = await Bronze.create({
                cliente: cliente,
                valor: valor,
                contato:contato,
                pagamento:pagamento
            })


        } catch (error) {
            console.log("algo de errado aconteceu")
        }

        res.json('Pagamento realizado, Cliente:' + cliente)
    }





}