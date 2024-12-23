// Função que altera o valor da propriedade display
function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
};

document.querySelector('#burguer').onclick = clickMenu;
