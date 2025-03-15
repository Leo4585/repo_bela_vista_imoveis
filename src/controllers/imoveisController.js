

let imoveis = [];
const endpointDaAPI = "https://leo4585.github.io/imoveis.json";
getBuscarImoveisDaAPI();    // Aqui o array "imoveis" é alimentado com os imóveis disponíveis no banco de dados

async function getBuscarImoveisDaAPI() {
  const res = await fetch(endpointDaAPI);
  imoveis = await res.json();  // Aqui o array "imoveis" é alimentado para que possa ser manipulado como objeto js
}



class ImoveisController {
  static async paginaInicial (req, res) {
    try {
      res.render('index', { listaDeImoveis: imoveis, title: 'Bela Vista Imóveis'});    
    } catch (error) {
      res.send('Erro ao carregar a página inicial');
    }
  };

  static async filtrarCasas (req, res) {
    try {
      const categoria = 'casa';
      let casasFiltradas = imoveis.filter(imovel => imovel.categoria == categoria);
      res.render('index', { listaDeImoveis: casasFiltradas, title: 'Casas à venda'});
    } catch (error) {
      res.send('Erro ao carregar a página de casas à venda');
    }
  };

  static async filtrarCasasDeAluguel (req, res) {
    try {
      const categoria = 'aluguel';
      let casasDeAluguelFiltradas = imoveis.filter(imovel => imovel.categoria == categoria);
      res.render('index', { listaDeImoveis: casasDeAluguelFiltradas,title: 'Casas para aluguel'});
    } catch (error) {
      res.send('Erro ao carregar a página de casas de aluguel');
    }
  };

  static async filtrarTerrenos (req, res) {
    try {
      const categoria = 'terreno';
      let terrenosFiltrados = imoveis.filter(imovel => imovel.categoria == categoria);
      res.render('index', { listaDeImoveis: terrenosFiltrados, title: 'Terrenos à venda'});
    } catch (error) {
      res.send('Erro ao carregar a página de terrenos');
    }
  };

  static async contato (req, res) {
    try {
      res.render('contato', {title: 'Contato'});
    } catch (error) {
      res.send('Erro ao carregar a página contato');
    }
  };

  static async quemSomos (req, res) {
    try {
      res.render('quemSomos', {title: 'Quem somos'});
    } catch (error) {
      res.send('Erro ao carregar a página Quem Somos');
    }
  };

};

export default ImoveisController;
