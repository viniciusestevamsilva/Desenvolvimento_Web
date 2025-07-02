document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('verificarBtn');
  const input = document.getElementById('numeroParImpar');
  const resultado = document.getElementById('resultadoParImpar');

  botao.addEventListener('click', function () {
    const numero = parseInt(input.value);

    if (isNaN(numero)) {
      resultado.textContent = 'Por favor, digite um número válido.';
      return;
    }

    resultado.textContent = `O número ${numero} é ${numero % 2 === 0 ? 'PAR' : 'ÍMPAR'}.`;
  });
});