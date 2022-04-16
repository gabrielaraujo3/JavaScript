function verificarPrimo() {
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  const num = Number(inNumero.value);

  if (num === 0 || isNaN(num)) {
    alert('Número Inválido...');
    inNumero.focus();
    return;
  }

  let numDivisores = 0;
  let temDivisor = 0;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      temDivisor = 1;
      break;
    }
  }

  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + ' É primo';
  } else {
    outResposta.textContent = num + ' Não é primo';
  }
}

const btVerificarPrimo = document.getElementById('btVerificarPrimo');
btVerificarPrimo.addEventListener('click', verificarPrimo);
