// const nome = 'Gabriel';
// const sobrenome = 'Araujo';

// const falaNome = () => nome + ' ' + sobrenome;

// exemplo 1
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exemplo 2
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// exemplo 3
// class Pessoa {
//   cosntructor(nome) {
//     this.nome = nome;
//   }
// }
// exports.Pessoa = Pessoa;

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'Gabriel';
const sobrenome = 'Araujo';

// para sobescrever só com module.exports !exports.
module.exports = {
  nome, sobrenome, Pessoa
};
