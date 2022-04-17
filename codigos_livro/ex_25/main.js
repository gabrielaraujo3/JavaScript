function meuPrograma() {
  let clubes = [];
  function adicionarClubes() {
    const inClube = document.getElementById('inClube');
    const clube = inClube.value;

    if (clube === '') {
      alert('Informe o clube corretamente');
      inClube.focus();
      return;
    }

    clubes.push(clube);

    inClube.value = '';
    inClube.focus();

    listarClubes();
  }
  const btAdicionar = document.getElementById('btAdicionar');
  btAdicionar.addEventListener('click', adicionarClubes);


  function listarClubes() {
    if(clubes.length === 0) {
      alert('Não há clubes na lista');
      return;
    }

    let lista = '';

    for (let i = 0; i < clubes.length; i++) {
      lista += (i + 1) + '. ' + clubes[i] + '\n';
    }

    document.getElementById('outLista').textContent = lista;
  }
  const btListar = document.getElementById('btListar');
  btListar.addEventListener('click', listarClubes);


  function montarTabela() {
    let tamanhoClubes = clubes.length;

    if (tamanhoClubes === 0 || tamanhoClubes % 2 !== 0) {
      alert('Inserir um número par de clubes');
      inClube.focus();
      return;
    }

    let jogos = '';
    let ultimo = tamanhoClubes - 1;

    for (i = 0; i < tamanhoClubes / 2; i++) {
      jogos += clubes[i] + ' x ' + clubes[ultimo - i] + '\n';
    }

    document.getElementById('outLista').textContent = jogos;
  }
  const btTabela = document.getElementById('btTabela');
  btTabela.addEventListener('click', montarTabela);
}
meuPrograma();