function meuPrograma() {
  function preencherEstrelas() {
    const inChinchilas = document.getElementById('inChinchilas');
    const inAnos = document.getElementById('inAnos');
    const outResposta = document.getElementById('outResposta');

    let chinchilas = Number(inChinchilas.value);
    const anos = Number(inAnos.value);

    if (chinchilas < 2 || isNaN(chinchilas) || inAnos === 0 || isNaN(anos)) {
      alert('Insira valores válidos...');
      inChinchilas.focus();
      return;
    }

    let resposta = '';

    for (let i = 1; i <= anos; i++) {
      if (i === 1) {
        resposta = resposta + i + 'º Ano: ' + chinchilas + ' Chinchilas\n';
      } else {
        chinchilas *= 3;
        resposta = resposta + i + 'º Ano: ' + chinchilas + ' Chinchilas\n';
      }
    }
    outResposta.textContent = resposta;
  }

  const btCalcular = document.getElementById('btCalcular');
  btCalcular.addEventListener('click', preencherEstrelas);
}
meuPrograma();