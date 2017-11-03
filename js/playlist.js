let tarefas = [
  {
    artista: '',
    musica: ''
  },
];

// Exercício 1: carregar as tarefas existentes
// ------------
//
let containerEl = document.querySelector('#lista-playlist');
function insereTarefaNaPagina(tarefa) {
  let tarefaLiEl = document.createElement('li');
  let musicaLiEl = document.createElement('li');
  tarefaLiEl.innerHTML = tarefa.artista;
  musicaLiEl.innerHTML = tarefa.musica;
  tarefaLiEl.classList.add('item-tarefa');
  musicaLiEl.classList.add('item-tarefa');

  // Desafio 1: novas tarefas no início
  let primeiraTarefaEl = containerEl.querySelector(':first-child');
  containerEl.insertBefore(tarefaLiEl, primeiraTarefaEl);
  containerEl.insertBefore(musicaLiEl, primeiraTarefaEl);
}


// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);





// Exercício 2: incluir uma nova tarefa
// -----------
//
let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
botaoIncluirEl.addEventListener('click', function(e) {
  let artistaInputEl = document.querySelector('#nova-tarefa-artista');
  let musicaInputEl = document.querySelector('#nova-tarefa-musica');

  if ((artistaInputEl.value == '') || (musicaInputEl.value == '')) {
    Materialize.toast('Campos em branco!', 3000);
  }

  else {
    // cria um novo objeto 'tarefa'
    let novaTarefa = {
      artista: 'Artista: ' + artistaInputEl.value,
      musica: 'Música: ' + musicaInputEl.value,
    };

    // coloca-o no vetor 'tarefas'
    tarefas.push(novaTarefa);
    // cria o <li> referente a essa tarefa e o
    // insere na página
    insereTarefaNaPagina(novaTarefa);

    // limpar o input e devolver o foco pra ele
    artistaInputEl.value = '';
    musicaInputEl.value = '';
    artistaInputEl.focus();
  }

});

// Exercício 3: botão para salvar e carregar nomes
// ------------
//
let BotaoSalvarEL = document.querySelector('#salvar');
BotaoSalvarEL.addEventListener('click', function(e) {
  let NomeUsuarioEL = document.querySelector('#nome-usuario');
  localStorage.setItem('usuario', NomeUsuarioEL.value);
  localStorage.setItem('tarefas-salvas', JSON.stringify(tarefas));
});

let BotaoCarregarEL = document.querySelector('#carregar');
BotaoCarregarEL.addEventListener('click', function(e) {
  let NomeUsuarioEL = document.querySelector('#nome-usuario');
  NomeUsuarioEL.value = localStorage.getItem('usuario');
  let TarefasCarregadas = localStorage.getItem('tarefas-salvas');
  containerEl.innerHTML = '';
  tarefas = JSON.parse(TarefasCarregadas);
  tarefas.forEach(insereTarefaNaPagina);
});
