import express from 'express';
import ImoveisController from '../controllers/imoveisController.js';


const routes = express.Router(); // Const que tem todas as rotas

routes.get('/', ImoveisController.paginaInicial);
routes.get('/casas', ImoveisController.filtrarCasas);
routes.get('/aluguel', ImoveisController.filtrarCasasDeAluguel);
routes.get('/terrenos', ImoveisController.filtrarTerrenos);
routes.get('/quemsomos', ImoveisController.quemSomos);
routes.get('/contato', ImoveisController.contato);
routes.post('/contato', ImoveisController.cadastrarContato);

export default routes;
