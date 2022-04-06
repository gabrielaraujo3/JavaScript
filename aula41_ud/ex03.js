/**
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número não é divisível por 3 e 5 = retorna o próprio número
 * Checa se o número é valído = retorna o próprio número
 */
function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}

console.log(fizzBuzz('a'))

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}
