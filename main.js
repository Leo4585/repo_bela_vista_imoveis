import { alterarDisplayMenuHamburguer } from "./scripts/alterarDisplayMenuHamburguer.js";
const imgMenuHamburguer = document.getElementById('burguer');


document.addEventListener('click', (evento) => {
  // O QUE ACONTECE AO CLICAR NO MENU HAMBÚRGUER
  if(evento.target.id == imgMenuHamburguer.id) {
    alterarDisplayMenuHamburguer();
  }
})

