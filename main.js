import { alterarDisplayMenuHamburguer } from "./scripts/alterarDisplayMenuHamburguer.js";
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');



document.addEventListener('click', (evento) => {
  // O QUE ACONTECE AO CLICAR NO MENU HAMBÚRGUER
  if (evento.target.id == imgMenuHamburguer.id) {
    console.log(evento.target.id)
    alterarDisplayMenuHamburguer();
  }

})

