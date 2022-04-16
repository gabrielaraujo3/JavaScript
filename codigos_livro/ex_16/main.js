function preencherEstrelas() {
  const inNumero = document.getElementById('inNumero');
  const outEspacos = document.getElementById('outEspacos');

  const num = Number(inNumero.value);

  if (num === 0 || isNaN(num)) {
    alert('Número inválido...');
    inNumero.focus();
    return;
  }

  let estrelas = '';

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      estrelas = estrelas + '*';
    } else {
      estrelas = estrelas + '-';
    }
  }

  outEspacos.textContent = estrelas;
}

const btPreencher = document.getElementById('btPreencher');
btPreencher.addEventListener('click', preencherEstrelas);