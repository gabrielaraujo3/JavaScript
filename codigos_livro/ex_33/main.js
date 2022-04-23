function gerarEmail() {
  const inFuncionario = document.getElementById('inFuncionario');
  const outEmail = document.getElementById('outEmail');

  const funcionario = inFuncionario.value;

  if (funcionario === '' || funcionario.indexOf(' ') === - 1) {
    alert('Informe o nome completo do funcionário...');
    inFuncionario.focus();
    return;
  }

  let partes = funcionario.split(' ');
  let email = '';
  const tam = partes.length;
  
  for (let i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0);
  }

  email += partes[tam - 1] + '@empresa.com.br';

  outEmail.textContent = 'E-mail: ' + email.toLowerCase();
}
const btGerar = document.getElementById('btGerar');
btGerar.addEventListener('click', gerarEmail);
