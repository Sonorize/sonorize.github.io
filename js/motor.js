(function($){
  //Efeitos do Materialize
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  });

  //Função para pegar os valores de dois inputs e concatená-los em um terceiro
  $("input").keyup(function() {
    let artistaInputEl = document.querySelector('#nova-tarefa-artista');
    let musicaInputEl = document.querySelector('#nova-tarefa-musica');
    let youtubeInputEl = document.querySelector('#search');

    if ((artistaInputEl.value == '') && (musicaInputEl.value == '')) {
      youtubeInputEl.value = '';
    }

    else {
      youtubeInputEl.value = artistaInputEl.value +  ' - ' + musicaInputEl.value;
    }
  });

})(jQuery);
