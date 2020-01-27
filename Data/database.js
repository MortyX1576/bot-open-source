var mongoose = require("mongoose"); 
var Schema = mongoose.Schema; 
mongoose
  .connect(
    "mongodb+srv://Smoke:Smoke2020@smoke-wovtr.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(function() {
    // Caso Logue Corretamente
    console.log(
      "\x1b[32m[ BANCO DE DADOS ] \x1b[0mBanco de dados foi ligado OK"
    );
  })
  .catch(function() {
    // Caso de ERRO
    console.log(
      "\x1b[31m[ BANCO DE DADOS ] \x1b[0mBanco de dados desligado por erro OK"
    );
  });
//database Guilds
var Guilds = new Schema({
    _id: { type: String, required: true }, 
    prefix: { type: String, default: "!", required: true}
})
//Database usuarios
var Base = new Schema({
  _id: { type: String, required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  level: { type: String },
  xp: { type: String },
  tag: { type: String }
});
var Usuarios = mongoose.model("Usuarios", Base);
var Guilds = mongoose.model("Guildas", Guilds);
exports.Users = Guilds
exports.Usuarios = Usuarios;

