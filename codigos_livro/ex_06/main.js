function calculaRaiz() {
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  let numero = Number(inNumero.value);

  if (numero === 0 || isNaN(numero)) {
    alert('Digite um número válido...');
    inNumero.focus();
    return;
  }

  if (numero % 2 === 0) {
    outResposta.textContent = numero + ' é Par';
  } else {
    outResposta.textContent = numero + ' é Ímpar';
  }
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calculaRaiz);