import mongoose from "mongoose";


const contatoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String },
  telefone: { type: String },
  assunto: { type: String },
  mensagem: { type: String }
}, { versionKey: false });

// CRIAÇÃO DO MODEL
// Dois parâmetros passados: 1) A coleção; 2) Esquema criado.
const contato = mongoose.model('contatos', contatoSchema);

export default contato;
