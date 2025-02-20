import { alternarDisplayMenuHamburguer } from "./alterarDisplayMenuHamburguer.js";
const imgMenuHamburguer = document.getElementById('burguer');
const menuListaMenuHamburguer = document.getElementById('itens');
let imoveis = [];
const endpointDaAPI = "https://leo4585.github.io/imoveis.json";
const elementoParaInserirImoveis = document.getElementById('imoveis');

getBuscarImoveisDaAPI();

async function getBuscarImoveisDaAPI() {
  const res = await fetch(endpointDaAPI);
  imoveis = await res.json();
  console.table(imoveis);
  exibirImoveisNaTela(imoveis)
}

function exibirImoveisNaTela(listaDeImoveis) {
  listaDeImoveis.forEach(imovel => {
    elementoParaInserirImoveis.innerHTML += `
      <article class="anuncios-em-destaque__article">
                <figure>
                    <div class="anuncios-em-destaque__figure__div">
                        <!-- Slider main container -->
                        <div class="swiper">
                            <!-- Additional required wrapper -->
                            <div class="swiper-wrapper">
                                <!-- Slides -->
                                <div class="swiper-slide"> <img
                                        class="swiper-slide__imagem"
                                        src="${imovel.imagem1}" alt="${imovel.alt}"></div>
                                <div class="swiper-slide"> <img
                                        class="swiper-slide__imagem"
                                        src="${imovel.imagem2}" alt="${imovel.alt}"></div>
                                <div class="swiper-slide"> <img
                                        class="swiper-slide__imagem"
                                        src="${imovel.imagem3}" alt="${imovel.alt}"></div>
                                <div class="swiper-slide"> <img
                                        class="swiper-slide__imagem"
                                        src="${imovel.imagem4}" alt="${imovel.alt}"></div>
                                <div class="swiper-slide"> <img
                                        class="swiper-slide__imagem"
                                        src="${imovel.imagem5}" alt="${imovel.alt}"></div>
                                ...
                            </div>
                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>

                            <!-- If we need navigation buttons -->
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>

                    <figcaption class="anuncios-em-destaque__figcaption__legendas">
                        <div class="caixa__legenda__titulo">
                            <h3 class="legenda__titulo">${imovel.titulo}</h3>
                            <h3 class="legenda__titulo">R$ ${imovel.valor} mil</h3>
                        </div>
                        <div>
                            <p class="legenda__nome-do-bairro">${imovel.bairro}</p>
                            <p class="legenda__nome-da-rua">${imovel.ruaNumero}</p>
                            <p class="legenda__nome-da-cidade">${imovel.cidadeEstado}</p>
                        </div>

                        <div class="container__icones-de-informacoes">
                            <div class="icones-de-informacoes__box">
                                <img class="icones-de-informacoes__box__img" src="img/icone_metragem.svg" alt="Área construída">
                                <p>${imovel.metragemTotal}m²</p>
                            </div>
                            <div class="icones-de-informacoes__box">
                                <img class="icones-de-informacoes__box__img" src="img/icone_dormitorio.svg" alt="Dormitórios">
                                <p>${imovel.qtdDormitorios}</p>
                            </div>
                            <div class="icones-de-informacoes__box">
                                <img class="icones-de-informacoes__box__img" src="img/icone_banheiro.svg" alt="Banheiros">
                                <p>${imovel.qtdBanheiros}</p>
                            </div>
                            <div class="icones-de-informacoes__box">
                                <img class="icones-de-informacoes__box__img" src="img/icone_garagem.svg" alt="Vagas">
                                <p>${imovel.qtdVagasGaragem}</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </article>
    `
  });
  // Inicialização do Swiper (que deve ocorrer após o código HTML)
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
  });

}

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
