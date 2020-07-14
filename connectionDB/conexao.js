//conexao
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

try {
    mongoose.connect('mongodb+srv://sampler:12345@cluster0-lqjhc.mongodb.net/flor?retryWrites=true&w=majority',
{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true});
console.log("banco conectado")

} catch (error) {
    console.log(error)
}

module.exports = mongoose