function calcularMedia() {
  let inNome = document.getElementById('inNome');
  let inNota1 = document.getElementById('inNota1');
  let inNota2 = document.getElementById('inNota2');
  let outSituacao = document.getElementById('outSituacao');
  let outMedia = document.getElementById('outMedia');

  let nome = inNome.value;
  let nota1 = Number(inNota1.value);
  let nota2 = Number(inNota2.value);
  let media = (nota1 + nota2) / 2;

  outMedia.textContent = 'Média das Notas: ' + media.toFixed(1);

  if (media >= 7) {
    outSituacao.textContent = 'Parabéns! ' + nome + ' Você foi aprovado(a).';
    outSituacao.style.color = 'blue';
  } else if (media >= 4) {
    outSituacao.textContent = 'Atenção ' + nome + '. Você está em recuperação.';
    outSituacao.style.color = 'green';
  } else {
    outSituacao.textContent = 'Ops ' + nome + '... Você foi reprovado(a).';
    outSituacao.style.color = 'red';
  }
}

let btResultado = document.getElementById('btResultado');
btResultado.addEventListener('click', calcularMedia);