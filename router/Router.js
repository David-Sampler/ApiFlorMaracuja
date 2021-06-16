const cliente = require('../controllers/ControlCliente')
const usuario = require('../controllers/ControlUsuario')
const servicos = require('../controllers/ControlServico')
const vendas = require('../controllers/ControlVendas')
const anotacoes = require('../controllers/ControlAnotacoes')
const middle = require('../midlewares/midleClientes')
const bronze = require('../controllers/ControlBronze')

const Combo = require('../controllers/ControlCombo')

module.exports = (app) => {


    app.get('/allcliente', cliente.allcliente);
    app.post('/insertcliente', middle, cliente.inserirCliente);
    app.del('/deletecliente/:id', cliente.excluircliente);
    app.put('/atualizarcliente/:id', cliente.updatecliente);
    app.get('/filtro/:id', cliente.Onecliente)

    app.get('/allUser', usuario.allUsuario)
    app.post('/insertUser', usuario.insertUsuario)
    app.post('/login', usuario.loginUser)
    app.get('/logarUsuario', usuario.logadoUsuario)
    //app.get('/autenticado',usuario.VerifyAutentic)
    app.del('/deleteUser/:id', usuario.deletarUsuario)
    app.put("/updateUser/:id", usuario.atualizarUsuario)

    app.get('/allservicos', servicos.allServicos)
    app.post('/insertservico', servicos.insertServico)
    app.del('/deleteservico/:id', servicos.deletaServico)
    app.put('/atualizarservico/:id', servicos.updateServico)

    app.get('/allvendas', vendas.allVendas)
    app.post('/insertvendas', vendas.inserirVenda)
    app.del('/deletevendas/:id', vendas.excluirVenda)
    app.put('/atualizarvendas/:id', vendas.updateVendas)
    app.get('/filtrovenda/:id', vendas.OneVendas)
    app.post('/filtro', vendas.filtroUsuario)


    app.get('/allanotacao', anotacoes.allnotações)
    app.post('/insertAnotacao', anotacoes.insertAnotacao)
    app.del('/deleteAnotacao/:id', anotacoes.apagarAnotacao)

    app.get('/allbronze',bronze.allvendas)
    app.post('/insertVendas',bronze.insertVenda)
    app.post('/filtrobronze',bronze.filtrobronze)
 
    app.get('/todosCombos',Combo.allCombo)
    app.post('/insertcombo',Combo.insertCombo)
    app.put('/atualizar/:id',Combo.atualizarCombo)
    app.post('/filtroCombo',Combo.filterCombor)
    app.put('/atualizavenda/:id',Combo.atualizarVenda)



} 