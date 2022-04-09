(function(idade, peso, altura) {
  
  const sobrenome = 'Araujo';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Gabriel'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.80);
