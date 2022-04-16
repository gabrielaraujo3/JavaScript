function listarNumeros() {
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  const numero = Number(inNumero.value);

  if (numero === 0 || isNaN(numero)) {
    alert('Informe um número válido...');
    inNumero.focus();
    return;
  }

  let resposta = 'Entre ' + numero + ' e 1: ' + numero;

  for (let i = numero - 1; i > 0; i--) {
    resposta = resposta + ', ' + i;
  }
  resposta += '.';

  outResposta.textContent = resposta;
}

const btDecrescer = document.getElementById('btDecrescer');
btDecrescer.addEventListener('click', listarNumeros);
