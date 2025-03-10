const elementoParaInserirImoveis = document.getElementById('imoveis');


export function exibirImoveisNaTela(listaDeImoveis) {
  elementoParaInserirImoveis.innerHTML = '';
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
                            <h3 class="legenda__titulo">${imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
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
