function fabricarEstrelas() {
  const inLinhas = document.getElementById('inLinhas');
  const outResposta = document.getElementById('outResposta');

  const linhas = Number(inLinhas.value);

  if (linhas === 0 || isNaN(linhas)) {
    alert('Preencha com um número válido...');
    inLinhas.focus();
    return;
  }

  let estrelas = '';

  for (let i = 1; i <= linhas; i++) {
    for (let y = 1; y <= i; y++) {
      estrelas = estrelas + '*';
    }
    estrelas += '\n';
  }
  
  outResposta.textContent = estrelas;
}

const btCriar = document.getElementById('btCriar');
btCriar.addEventListener('click', fabricarEstrelas);
