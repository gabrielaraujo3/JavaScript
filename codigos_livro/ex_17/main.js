function preencherEstrelas() {
  const inFruta = document.getElementById('inFruta');
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  const fruta = inFruta.value;
  const numero = Number(inNumero.value);

  if (fruta === '' || numero === 0 || isNaN(numero)) {
    alert('Preencha os campos corretamente...');
    inFruta.focus();
    return;
  }

  let frutas = fruta;

  for (let i = 1; i < numero; i++) {
    frutas = frutas + '*' + fruta;
  }

  outResposta.textContent = frutas;
}

const btRepetir = document.getElementById('btRepetir');
btRepetir.addEventListener('click', preencherEstrelas);