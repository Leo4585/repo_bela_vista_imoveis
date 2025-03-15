import { alternarDisplayMenuHamburguer } from "./alterarDisplayMenuHamburguer.js";


// MENU HAMBURGUER (GERENCIAMENTO DO DISPLAY ENTRE BLOCK E NONE)
// Capturqando elementos necessários no DOM
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');
// Comportamento ao clicar na img do menu hambúrguer
imgMenuHamburguer.addEventListener('click', (evento) => {
  if (evento.target.id == imgMenuHamburguer.id) {
    alternarDisplayMenuHamburguer();
  }
});
// Comportamento quando o clique não é na lista nem na img do menu hambúrguer
document.addEventListener('click', (evento) => {
  if (!menuListaMenuHamburguer.contains(evento.target) && !imgMenuHamburguer.contains(evento.target)) {
    menuListaMenuHamburguer.classList.add('cabecalho__menu__menu-hamburguer__itens');
    imgMenuHamburguer.classList.add('cabecalho__img__menu-hamburguer');
  }
});
