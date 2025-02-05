// CAPTURANDO ELEMENTOS NO DOM
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');

export function alterarDisplayMenuHamburguer() {
// DEFINIÇÃO DA FUNÇÃO
  //evento.preventDefault();   // Previne o recarregamento do formulário (evento padrão)
  imgMenuHamburguer.classList.toggle('cabecalho__menu__hamburguer');
  menuListaMenuHamburguer.classList.toggle('itens__menu-hamburguer');
}
