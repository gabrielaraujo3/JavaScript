function meuPrograma() {
let carros = [];

function adicionarCarros() {
  const inModelo = document.getElementById('inModelo');
  const inPreco = document.getElementById('inPreco');

  const modelo = inModelo.value;
  const preco = Number(inPreco.value);

  if (modelo === '' || preco === 0 || isNaN(preco)) {
    alert('Informe corretamento os dados');
    inModelo.focus();
    return;
  }

  carros.push({ modelo: modelo, preco: preco });

  inModelo.value = '';
  inModelo.value = '';
  inModelo.focus();

  listarCarros();
}
const btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarCarros);

function listarCarros() {
  if (carros.length === 0) {
    alert('Não há carros na lista');
    return;
  }

  let lista = '';

  for (let i = 0; i < carros.length; i++) {
    lista += carros[i].modelo + ' - R$: ' + carros[i].preco.toFixed(2) + '\n';
  }

  document.getElementById('outLista').textContent = lista;
}
const btLista = document.getElementById('btListar');
btLista.addEventListener('click', listarCarros);

function filtrarCarros() {
  let maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'));

  if (maximo === 0 || isNaN(maximo)) {
    return;
  }

  let lista = '';

  for (let i = 0; i < carros.length; i++) {
    if(carros[i].preco <= maximo) {
      lista += carros[i].modelo + ' - R$: ' + carros[i].preco.toFixed(2) + '\n';
    }
  }

  const outLista = document.getElementById('outLista');

  if (lista === '') {
    outLista.textContent = 'Não há carros com preço até R$ ' + maximo.toFixed(2);
  } else {
    outLista.textContent = 'Carros até R$ ' + maximo.toFixed(2) + '\n----------------------------\n' + lista;
  }
}

const btFiltrar = document.getElementById('btFiltrar');
btFiltrar.addEventListener('click', filtrarCarros);
}
meuPrograma();
