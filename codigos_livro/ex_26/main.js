function meuPrograma() {
  let numeros = [];

  function adicionarNumero() {
    let inNumero = document.getElementById('inNumero');
    let outLista = document.getElementById('outLista');
    let outOrdem = document.getElementById('outOrdem');

    let numero = Number(inNumero.value);

    if (numero === 0 || isNaN(numero) || numeros.indexOf(numero) >= 0) {
      alert('Informe um número válido e inexistente na lista');
      inNumero.focus();
      return;
    }

    numeros.push(numero);

    outLista.textContent = 'Números: ' + numeros.join(', ');

    outOrdem.textContent = '';

    inNumero.value = '';
    inNumero.focus();
  }
  const btAdicionar = document.getElementById('btAdicionar');
  btAdicionar.addEventListener('click', adicionarNumero);


  function verificarOrdem() {
    let inNumero = document.getElementById('inNumero');
    let outOrdem = document.getElementById('outOrdem');

    if (numeros.length === 0) {
      alert('Sem números na lista...');
      inNumero.focus();
      return;
    }

    let ordem = true;

    for (let i = 0; i < numeros.length - 1; i++) {
      if (numeros[i] > numeros[i + 1]) {
        ordem = false;
        break;
      }
    }

    outOrdem.textContent = ordem ? 'Ok! Números estão em ordem crescente' : 'Atenção... Números não estão em ordem crescente';
  }
  const btVerificar = document.getElementById('btVerificar');
  btVerificar.addEventListener('click', verificarOrdem);
}
