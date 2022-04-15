function verificaVelocidade() {
  const inPermitida = document.getElementById('inPermitida');
  const inCondutor = document.getElementById('inCondutor');
  const outResposta = document.getElementById('outResposta');

  const velPermitida = Number(inPermitida.value);
  const velCondutor = Number(inCondutor.value);

  if (velPermitida === 0 || isNaN(velPermitida) || velCondutor === 0 || isNaN(velCondutor)) {
    alert('Preencha os campos corretamente...');
    inPermitida.focus();
    return;
  }

  if (velCondutor > velPermitida) {
    if (velCondutor > (velPermitida * 1.2)) {
      outResposta.textContent = 'Situação: Multa Grave';
    } else {
      outResposta.textContent = 'Situação: Multa Leve';
    }
  } else {
    outResposta.textContent = 'Situação: Sem Multa';
  }
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', verificaVelocidade);