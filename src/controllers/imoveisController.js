//import { imoveis } from '../../public/scripts/main.js'


class ImoveisController {
  static async paginaInicial (req, res) {
    try {
      res.render('index');    
    } catch (error) {
      res.send('Erro ao carregar a página inicial');
    }
  };

  static async filtrarCasas (req, res) {
    try {
      const casasFiltradas = imoveis.filter(imovel => imovel.categoria == 'casa');
      res.render('index', { imovel: casasFiltradas });
    } catch (error) {
      
    }
  };

  static async contato (req, res) {
    try {
      res.render('contato');
    } catch (error) {
      res.send('Erro ao carregar a página contato');
    }
  };

  static async quemSomos (req, res) {
    try {
      res.render('quemSomos');
    } catch (error) {
      res.send('Erro ao carregar a página Quem Somos');
    }
  };

};

export default ImoveisController;
