import express from 'express';
import conectaNaDatabase from './src/config/dbConnect.js';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import routes from './src/routes/imoveisRoutes.js';



const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  console.error('Erro de conexão', erro);
});
conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();


// Define o caminho inicial para os arquivos estáticos (chamados no html)
app.use(express.static('public'));

// Duas linhas necessárias para usar o path no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Middleware que permite o servidor trabalhar com o req.body enviado pelo HTML
app.use(routes);

// app.route('/').get((req, res) => {
//   res.render('index');
// });

export default app;
