import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import routes from './src/routes/imoveisRoutes.js';


const app = express();


// Define o caminho inicial para os arquivos estáticos (chamados no html)
app.use(express.static('public'));

// Duas linhas necessárias para usar o path no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

// app.route('/').get((req, res) => {
//   res.render('index');
// });

export default app;
