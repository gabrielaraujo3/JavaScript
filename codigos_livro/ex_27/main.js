function meuPrograma() {
  let candidatos = []

  function adicionaCandidato() {
    const inNome = document.getElementById('inNome');
    const inAcertos = document.getElementById('inAcertos');
    const nome = inNome.value;
    const acertos = Number(inAcertos.value);

    if (nome === '' || inAcertos.value === '' || isNaN(acertos)) {
      alert('Informe corretamente os dados');
      inNome.focus();
      return;
    }

    candidatos.push({ nome: nome, acertos: acertos });
    inNome.value = '';
    inAcertos.value = '';
    inNome.focus();
    listarCandidatos();
  }
  const btAdicionar = document.getElementById('btAdicionar');
  btAdicionar.addEventListener('click', adicionaCandidato);


  function listarCandidatos() {
    if (candidatos.length === 0) {
      alert('Não há candidatos na lista');
      return;
    }

    let lista = '';

    for (let i = 0; i < candidatos.length; i++) {
      lista += candidatos[i].nome + ' - ' + candidatos[i].acertos + ' acertos\n';
    }

    document.getElementById('outLista').textContent = lista;
  }
  const btListar = document.getElementById('btListar');
  btListar.addEventListener('click', listarCandidatos);


  function mostrarAprovados() {
    if (candidatos.length === 0) {
      alert('Não há candidatos na lista');
      return;
    }

    let corte = Number(prompt('Número de acertos para aprovação? '));

    if (corte === 0 || isNaN(corte)) {
      alert('Insira um número válido');
      return;
    }

    let copia = candidatos.slice();

    copia.sort(function (a, b) {
      return a.acertos - b.acertos
    });

    copia.reverse();
    let aprovados = '';

    for (let i = 0; i < copia.length; i++) {
      if(copia[i].acertos >= corte) {
        aprovados += copia[i].nome + ' - ' + copia[i].acertos + ' acertos\n';
      }
    }

    const outLista = document.getElementById('outLista');

    if (aprovados === '') {
      outLista.textContent = 'Nenhum candidato aprovado...';
    } else {
      outLista.textContent = aprovados;
    }
  }
  const btAprovados = document.getElementById('btAprovados');
  btAprovados.addEventListener('click', mostrarAprovados);
  }
meuPrograma();
