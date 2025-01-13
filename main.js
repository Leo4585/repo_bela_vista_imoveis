// CAPTURANDO ELEMENTOS NO DOM
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');

// O QUE ACONTECE AO CLICAR NO MENU HAMBÚRGUER
imgMenuHamburguer.addEventListener('click', alterarDisplay);

// DEFINIÇÃO DA FUNÇÃO
function alterarDisplay(evento) {
  evento.preventDefault();   // Previne o recarregamento do formulário (evento padrão)

  if (menuListaMenuHamburguer.style.display == 'block') {
    menuListaMenuHamburguer.style.display = 'none';
    imgMenuHamburguer.style.backgroundColor = 'var(--azul-celeste)';
  }
  else {
    menuListaMenuHamburguer.style.display = 'block';
    imgMenuHamburguer.style.backgroundColor = 'var(--cor-de-fundo)';
    }

}
