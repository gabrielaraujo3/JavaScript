function calcularNotas() {
  const inSaque = document.getElementById('inSaque');
  const outNotasCem = document.getElementById('outNotasCem');
  const outNotasCinquenta = document.getElementById('outNotasCinquenta');
  const outNotasDez = document.getElementById('outNotasDez');

  outNotasCem.textContent = '';
  outNotasCinquenta.textContent = '';
  outNotasDez.textContent = '';

  let saque = Number(inSaque.value);

  if (saque === 0 || isNaN(saque)) {
    alert('Informe o valor do saque corrente');
    inSaque.focus();
    return;
  }

  if (saque % 10 !== 0) {
    alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)');
    inSaque.focus();
    return;
  }

  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100;
  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  const notasDez = Math.floor(resto / 10);

  if(notasCem > 0) {
    outNotasCem.textContent = 'Notas de R$100: ' + notasCem;
  }
  if (notasCinquenta > 0) {
    outNotasCinquenta.textContent = 'Notas de R$50: ' + notasCinquenta;
  }
  if (notasDez > 0) {
    outNotasDez.textContent = 'Notas de R$10: ' + notasDez;
  }
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularNotas);
