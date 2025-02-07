import { alternarDisplayMenuHamburguer } from "./scripts/alterarDisplayMenuHamburguer.js";
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');


// O que acontece ao clicar na img do menu hambúrguer
imgMenuHamburguer.addEventListener('click', (evento) => {
  if (evento.target.id == imgMenuHamburguer.id) {
    console.log(evento.target.id)
    alternarDisplayMenuHamburguer();
  }
});

// Quando o clique não é na lista nem na img do menu hambúrguer
document.addEventListener('click', (evento) => {
  if (!menuListaMenuHamburguer.contains(evento.target) && !imgMenuHamburguer.contains(evento.target)) {
    menuListaMenuHamburguer.classList.add('itens__menu-hamburguer');
    imgMenuHamburguer.classList.add('cabecalho__menu__hamburguer');
  }
});

