function calcularRaiz() {
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');
  const numero = Number(inNumero.value);

  if (numero === 0 || isNaN(numero)) {
    alert('Informe um número válido...');
    inNumero.focus();
    return;
  }

  let raiz = Math.sqrt(numero);

  if (raiz === Math.floor(raiz)) {
    outResposta.textContent = 'Raiz: ' + raiz;
  } else {
    outResposta.textContent = 'Não há raiz exata para ' + numero;
  }
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularRaiz);