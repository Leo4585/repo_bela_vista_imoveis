class ImoveisController {
  static async paginaInicial (req, res) {
    try {
      res.render('index');    
    } catch (error) {
      res.send('Erro ao carregar a página inicial');
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
