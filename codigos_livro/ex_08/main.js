function calcularTempo() {
  const inValor = document.getElementById('inValor');
  const outTempo = document.getElementById('outTempo');
  const outTroco = document.getElementById('outTroco');

  const valor = Number(inValor.value);

  if (valor === 0 || isNaN(valor) || valor > 3) {
    alert('Digite um valor válido...');
    inValor.focus();
    return;
  }

  var troco = 0;
  if (valor === 1.75) {
    troco = valor - 1.75;
    outTempo.textContent = 'Tempo: 60 min';
  } else if (valor === 3) {
    outTempo.textContent = 'Tempo: 120 min';
    troco = valor - 3;
  } else {
    let temp = (valor / 1) * 30;
    outTempo.textContent = 'Tempo: ' + temp + 'min';
    troco = valor % 1;
  }

  if (troco > 0) {
    outTroco.textContent('Troco R$: ' + troco.toFixed(2));
  }
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularTempo);