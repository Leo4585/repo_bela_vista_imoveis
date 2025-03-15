// CAPTURANDO ELEMENTOS NO DOM
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');

export function alternarDisplayMenuHamburguer() {
// DEFINIÇÃO DA FUNÇÃO
  imgMenuHamburguer.classList.toggle('cabecalho__img__menu-hamburguer');
  menuListaMenuHamburguer.classList.toggle('cabecalho__menu__menu-hamburguer__itens');
}
