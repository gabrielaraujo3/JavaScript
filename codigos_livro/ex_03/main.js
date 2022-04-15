function calcularFuso() {
  const inHoraBrasil = document.getElementById('inHoraBrasil');
  const outHoraFranca = document.getElementById('outHoraFranca');
  const horaBrasil = Number(inHoraBrasil.value);

  if (inHoraBrasil.value === '' || isNaN(horaBrasil)) {
    alert('Informe a hora do Brasil corretamente');
    inHoraBrasil.focus();
    return;
  }

  let horaFranca = horaBrasil + 5;

  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }
  
  outHoraFranca.textContent = 'Hora na França: ' + horaFranca.toFixed(2);
}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularFuso);