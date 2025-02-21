import { alternarDisplayMenuHamburguer } from "./alterarDisplayMenuHamburguer.js";
import { exibirImoveisNaTela } from "./exibirImoveisNaTela.js";
import { filtrarImoveis } from "./filtrarImoveis.js";

const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');

export let imoveis = [];
const endpointDaAPI = "https://leo4585.github.io/imoveis.json";
getBuscarImoveisDaAPI();

async function getBuscarImoveisDaAPI() {
  const res = await fetch(endpointDaAPI);
  imoveis = await res.json();  // Aqui o array "imoveis" é alimentado
  exibirImoveisNaTela(imoveis)
}

// MENU HAMBURGUER - GERENCIAMENTO AO CLICAR
// O que acontece ao clicar na img do menu hambúrguer
imgMenuHamburguer.addEventListener('click', (evento) => {
  if (evento.target.id == imgMenuHamburguer.id) {
    alternarDisplayMenuHamburguer();
  }
});
// Quando o clique não é na lista nem na img do menu hambúrguer
document.addEventListener('click', (evento) => {
  if (!menuListaMenuHamburguer.contains(evento.target) && !imgMenuHamburguer.contains(evento.target)) {
    menuListaMenuHamburguer.classList.add('cabecalho__menu__menu-hamburguer__itens');
    imgMenuHamburguer.classList.add('cabecalho__img__menu-hamburguer');
  }
});


const botoesDeFiltro = document.querySelectorAll('.link-de-filtro');
botoesDeFiltro.forEach(botaoDeFiltro => botaoDeFiltro.addEventListener('click', filtrarImoveis));
