function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  };
}

// A variavel recebe como atributo o retorno da função criaMultiplicador
// que é necessário receber no ato um argumento - agora a variavel tem a função anônima como seu valor.
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// A função anônima retorna o valor de n multiplicado pelo valor definido no parametro de criaMultiplicador,
// que foi definido acima, na atribuição da função à variavel
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

