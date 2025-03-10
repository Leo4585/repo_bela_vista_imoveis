import { imoveis } from "./main.js";
import { exibirImoveisNaTela } from "./exibirImoveisNaTela.js";
import { alternarDisplayMenuHamburguer } from "./alterarDisplayMenuHamburguer.js";


export function filtrarImoveis() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let imoveisFiltrados = imoveis.filter(imovel => imovel.categoria == categoria);
  exibirImoveisNaTela(imoveisFiltrados);
  alternarDisplayMenuHamburguer();
}