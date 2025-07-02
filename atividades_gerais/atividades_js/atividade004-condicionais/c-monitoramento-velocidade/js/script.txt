document.addEventListener('DOMContentLoaded', function () {
  const inputVelocidade = document.getElementById('velocidade');
  const botaoVerificar = document.getElementById('btnVerificarVelocidade');
  const resultado = document.getElementById('resultadoVelocidade');

  botaoVerificar.addEventListener('click', function () {
    const velocidade = Number(inputVelocidade.value);

    if (isNaN(velocidade) || velocidade < 0) {
      resultado.innerHTML = '<span class="alerta">Por favor, informe uma velocidade válida.</span>';
      return;
    }

    if (velocidade <= 60) {
      resultado.innerHTML = '<span class="seguro">Velocidade segura. Dirija com responsabilidade!</span>';
    } else {
      resultado.innerHTML = '<span class="alerta">Velocidade acima do permitido! Reduza imediatamente!</span>';
    }
  });
});
