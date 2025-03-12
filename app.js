import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.route('/').get((req, res) => {
  res.render('index');
});

export default app;
