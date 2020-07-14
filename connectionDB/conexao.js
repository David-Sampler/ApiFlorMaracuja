//conexao
var mongoose = require('mongoose');
mongoose.connect(process.env.DBMONGO,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true});
module.exports = mongoose