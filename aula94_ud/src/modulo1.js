export const nome = 'Gabriel';
export const sobrenome = 'Araujo';
export const idade = 22;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
