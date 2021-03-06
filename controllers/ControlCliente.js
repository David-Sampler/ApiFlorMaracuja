const cliente = require('../schemas/ModelCliente')

module.exports = {
    //verificar todos clientes
    allcliente: async (req, res) => {
        try {
            let todos = await cliente.find()
            console.log(todos)
            res.send(todos)
        } catch (error) {
            console.log(error)
        }

    },

    Onecliente: async (req, res) => {
        const id = req.params.id
        let cli = await cliente.findOne({ _id: id })
        console.log(cli)
        return res.json(cli)

    },

    //inserir cliente
    inserirCliente: async (req, res) => {
        const {nome,contato,nascimento} = req.body

        let Nome = await cliente.findOne({nome})
        if(!Nome){
            try {
                let cli = await cliente.create({
                    nome,contato,nascimento
                })       
                res.send({ msg: "Cadastrado com sucesso" })
            } catch (error) {
                console.log(error)
            }
        } else{
            res.json("Atenção! nome já existe")
           console.log("Nome já existe")
        }     
        
       
    },

    excluircliente: async (req, res) => {
        const dado = req.body
        try {
            let filtro = await cliente.deleteOne({ _id: req.params.id })
            console.log(filtro)
            res.send({ msg: "Excluido" })
        } catch (error) {
            console.log("Erro ao excluir", error)
        }

    },

    updatecliente: async (req, res) => {

        const { nome, endereco, telefone, email } = req.body

        let filtro = await cliente.findOneAndUpdate({ _id: req.params.id },
            {
                nome: nome,
                endereco: endereco,
                telefone: telefone,
                email: email,
                criado: new Date().toString()
            }
        )

        console.log("Atualizado com sucesso")
        res.send({ msg: filtro })



    }

}