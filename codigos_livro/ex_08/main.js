function calcularTempo() {
  const inValor = document.getElementById('inValor');
  const outTempo = document.getElementById('outTempo');
  const outTroco = document.getElementById('outTroco');

  const valor = Number(inValor.value);

  if (valor === 0 || isNaN(valor)) {
    alert('Digite um valor válido...');
    inValor.focus();
    return;
  }

  if (valor < 1) {
    alert('Valor Insuficiente, mínimo R$ 1.00');
    inValor.focus();
    return;
  }

  var troco = 0;
  var tempo = 0;

  if (valor >= 3) {
    tempo = 120;
    troco = valor - 3;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1;
  }

  outTempo.textContent = 'Tempo: ' + tempo + ' min';

  if (troco > 0) {
    outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
  }
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularTempo);