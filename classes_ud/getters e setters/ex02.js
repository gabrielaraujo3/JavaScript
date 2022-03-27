class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const pessoa1 = new Pessoa('Maria', 'Oliveira');

pessoa1.nomeCompleto = 'Maria Oliveira Souza'
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log(pessoa1.nomeCompleto);