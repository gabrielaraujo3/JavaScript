function meuPrograma() {
  let pacientes = [];

  function adicionarPaciente() {
    const inPaciente = document.getElementById('inPaciente');
    const outLista = document.getElementById('outLista');

    const nome = inPaciente.value;

    if (nome === '') {
      alert('Informe o nome do paciente');
      inPaciente.focus();
      return;
    }

    pacientes.push(nome);

    let lista = '';

    for (i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + '.' + pacientes[i] + '\n';
    }

    outLista.textContent = lista;

    inPaciente.value = '';
    inPaciente.focus();
  }
  const btAdicionar = document.getElementById('btAdicionar');
  btAdicionar.addEventListener('click', adicionarPaciente);


  function adicionarUrgente() {
    const inPaciente = document.getElementById('inPaciente');
    const outLista = document.getElementById('outLista');

    const nome = inPaciente.value;

    if (nome === '') {
      alert('Informe o nome do paciente');
      inPaciente.focus();
      return;
    }

    pacientes.unshift(nome);

    let lista = '';

    for (i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + '.' + pacientes[i] + '\n';
    }

    outLista.textContent = lista;

    inPaciente.value = '';
    inPaciente.focus();
  }
  const btUrgencia = document.getElementById('btUrgencia');
  btUrgencia.addEventListener('click', adicionarUrgente);


  function atenderPaciente() {
    if (pacientes.length === 0) {
      alert('Não há pacientes na lista de espera');
      inPaciente.focus();
      return;
    }
    
    const outAtendimento = document.getElementById('outAtendimento');
    const outLista = document.getElementById('outLista');

    let atender = pacientes.shift();

    outAtendimento.textContent = atender;

    let lista = '';

    for (i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + '.' + pacientes[i] + '\n';
    }

    outLista.textContent = lista;
  }
  const btAtender = document.getElementById('btAtender');
  btAtender.addEventListener('click', atenderPaciente);
}
meuPrograma();
