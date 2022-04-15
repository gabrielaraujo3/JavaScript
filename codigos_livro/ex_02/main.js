function calcularPeso() {
  const inNome = document.getElementById('inNome');
  const rbMasculino = document.getElementById('rbMasculino');
  const rbFeminino = document.getElementById('rbFeminino');
  const inAltura = document.getElementById('inAltura');
  const outResposta = document.getElementById('outResposta');

  let nome = inNome.value;
  let masculino = rbMasculino.checked;
  let feminino = rbFeminino.checked;
  let altura = Number(inAltura.value);

  if (nome === '' || (masculino === false && feminino === false)) {
    alert('Por favor, informe o nome e selecione o sexo...');
    inNome.focus();
    return;
  }
  
  if (altura === 0 || isNaN(altura)) {
    alert('Por favor, informe uma altura corretamente...');
    inAltura.focus();
    return;
  }

  if (masculino) {
    var peso = 22 * Math.pow(altura, 2);
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  outResposta.textContent = nome + ': Seu peso ideal é ' + peso.toFixed(3) + 'kg';
}

const btResultado = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularPeso);

function limparCampos() {
  document.getElementById('inNome').value = '';
  document.getElementById('rbMasculino').checked = false;
  document.getElementById('rbFeminino').checked = false;
  document.getElementById('inAltura').value = '';
  document.getElementById('outResposta').textContent = '';
  document.getElementById('inNome').focus();
}

const btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparCampos);
