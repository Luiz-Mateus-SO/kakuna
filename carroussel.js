$(document).ready(function() {
  function initializeSlick() {
    // Verifica se já existe uma instância do slick, se sim, desfaz
    if ($('.slick-carousel').hasClass('slick-initialized')) {
      $('.slick-carousel').slick('unslick');
    }

    // Verifica a largura da tela e inicializa o slick de acordo
    if ($(window).width() <= 768) {
      $('.slick-carousel').slick({
        dots: true, // Exibir pontos de navegação
        infinite: false, // Permite rolar infinitamente
        speed: 300, // Velocidade de transição
        slidesToShow: 1, // Exibir 1 item por vez
        slidesToScroll: 1, // Mover 1 item por vez
        arrows: false, // Desativa setas de navegação
        swipe: true, // Ativa o swipe
        touchThreshold: 10
      });
    } else if ($(window).width() <= 1024) {
      $('.slick-carousel').slick({
        dots: true, // Exibir pontos de navegação
        infinite: false, // Permite rolar infinitamente
        speed: 300, // Velocidade de transição
        slidesToShow: 2, // Exibir 2 itens por vez
        slidesToScroll: 2, // Mover 2 itens por vez
        arrows: false, // Desativa setas de navegação
        swipe: true, // Ativa o swipe
        touchThreshold: 10
      });
    } else {
      $('.slick-carousel').slick({
        dots: true, // Exibir pontos de navegação
        infinite: false, // Permite rolar infinitamente
        speed: 300, // Velocidade de transição
        slidesToShow: 3, // Exibir 3 itens por vez
        slidesToScroll: 3, // Mover 3 itens por vez
        arrows: false, // Desativa setas de navegação
        swipe: true, // Ativa o swipe
        touchThreshold: 10
      });
    }
  }

  // Inicializa o Slick
  initializeSlick();

  // Re-inicializa o Slick ao redimensionar a janela
  $(window).resize(function() {
    initializeSlick(); // Re-inicializa
  });
});
