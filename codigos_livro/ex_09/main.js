function verificarTriangulo() {
  const inLadoA = document.getElementById('inLadoA');
  const inLadoB = document.getElementById('inLadoB');
  const inLadoC = document.getElementById('inLadoC');
  const outResposta = document.getElementById('outResposta');
  const outTipo = document.getElementById('outTipo');

  const ladoA = Number(inLadoA.value);
  const ladoB = Number(inLadoB.value);
  const ladoC = Number(inLadoC.value);

  if (ladoA === 0 || isNaN(ladoA) || ladoB === 0 || isNaN(ladoB) || ladoC === 0 || isNaN(ladoC)) {
    alert('Informe valores válidos para os lados');
    inLadoA.focus();
    return;
  }

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outResposta.textContent = 'Os lados não formam um triângulo';
  } else {
    outResposta.textContent = 'Os lados podem formar um triângulo';
    if (ladoA === ladoB && ladoA === ladoC) {
      outTipo.textContent = 'Tipo: Equilátero';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      outTipo.textContent = 'Tipo: Isósceles';
    } else {
      outTipo.textContent = 'Tipo: Escaleno';
    }
  }
}

const btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificarTriangulo);
