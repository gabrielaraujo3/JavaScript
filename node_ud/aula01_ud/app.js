// exemplo 1
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;

// exemplo 2
// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());

// exemplo 3
// const path = require('path');
// const { Pessoa } = require('./mod1');

// const p1 = new Pessoa('Gabriel');
// console.log(p1);

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('João');
console.log(p1);
