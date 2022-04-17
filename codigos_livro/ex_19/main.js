function meuPrograma() {
  function verificarPerfeitos() {
    const inNumero = document.getElementById('inNumero');
    const outDivisores = document.getElementById('outDivisores');
    const outResposta = document.getElementById('outResposta');

    const numero = Number(inNumero.value);

    if (numero === 0 || isNaN(numero)) {
      alert('Informe um número válido...');
      inNumero.focus();
      return;
    }

    let perfeitoSN = ' Não é um número perfeito';
    let soma = 0;
    let divisores = 'Divisores de ' + numero + ': ';

    for (let i = 0; i < numero; i++) {
      if (numero % i === 0) {
        if (i === 1) {
          divisores = divisores + i;
        } else {
          divisores = divisores + ', ' + i;
        }
        soma += i;
      }
    }
    if (numero === soma) {
      perfeitoSN = ' É um número perfeito';
    }

    outDivisores.textContent = divisores + ' (Soma: ' + soma + ')';
    outResposta.textContent = numero + ' ' + perfeitoSN;
  }
  const btVerificar = document.getElementById('btVerificar');
  btVerificar.addEventListener('click', verificarPerfeitos);
}
meuPrograma();
