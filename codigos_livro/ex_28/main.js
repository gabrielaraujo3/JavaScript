function meuPrograma() {
  let noticias = []

  function adicionarNoticia() {
    const inNoticia = document.getElementById('inNoticia');
    const outCadastradas = document.getElementById('outCadastradas');
    const noticia = inNoticia.value;
    
    if (noticia === '') {
      alert('Informe a notícia a ser incluída');
      inNoticia.focus();
      return;
    }

    noticias.push(noticia);
    outCadastradas.textContent = 'Notícias Cadastradas: ' + noticias.length;
    inNoticia.value = '';
    inNoticia.focus();
  }
  const btAdicionar = document.getElementById('btAdicionar');
  btAdicionar.addEventListener('click', adicionarNoticia);


  function listarUltimas() {
    let quantidade = Number(prompt('Quantas notícias você deseja listar? '));
    let total = noticias.length;

    if (quantidade === 0 || isNaN(quantidade) || quantidade > total) {
      alert('Informe um número válido');
      return;
    }

    let ultimas = quantidade + ' Últimas Notícias\n-----------------------------------------------\n';

    for (let i = total - 1; i >= total - quantidade; i--) {
      ultimas += (i + 1) + 'º) ' + noticias[i] + '\n';
    }

    document.getElementById('outLista').textContent = ultimas;
  }
  const btListar = document.getElementById('btListar');
  btListar.addEventListener('click', listarUltimas);
}
meuPrograma();
