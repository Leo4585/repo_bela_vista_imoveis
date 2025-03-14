import express from 'express';
import ImoveisController from '../controllers/imoveisController.js';


const routes = express.Router(); // Const que tem todas as rotas

routes.get('/', ImoveisController.paginaInicial);
routes.get('/casas', ImoveisController.filtrarCasas);
routes.get('/quemsomos', ImoveisController.quemSomos);
routes.get('/contato', ImoveisController.contato);

export default routes;
