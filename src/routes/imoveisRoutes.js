import express from 'express';
import ImoveisController from '../controllers/imoveisController.js';


const routes = express.Router(); // Const que tem todas as rotas

routes.get('/', ImoveisController.paginaInicial);

export default routes;
