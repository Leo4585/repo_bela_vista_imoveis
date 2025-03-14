

let imoveis = [];
const endpointDaAPI = "https://leo4585.github.io/imoveis.json";
getBuscarImoveisDaAPI();

async function getBuscarImoveisDaAPI() {
  const res = await fetch(endpointDaAPI);
  imoveis = await res.json();  // Aqui o array "imoveis" é alimentado/atualizado
}



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
      const categoria = 'casa';
      let casasFiltradas = imoveis.filter(imovel => imovel.categoria == categoria);
      res.render('index', { listaDeImoveis: casasFiltradas });
    } catch (error) {
      res.send('Erro ao carregar a página de casas');
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
