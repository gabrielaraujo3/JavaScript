do {
  var num = Number(prompt('Número: '));
  if (num === 0 || isNaN(num)) {
    alert('Digite um número válido...');
  }} while (num === 0 || isNaN(num));

  let pares = 'Pares entre 1 e ' + num + ': ';

  if (num > 1) {
    pares = pares + '2';
  }

  for (let i = 4; i <= num; i += 2) {
    pares = pares + ', ' + i;
  }

  alert(pares);
