import { AdicionarEvento } from '../utils/utils.js';

export function imparpar() {
  const input = document.getElementById('numeroParImpar');
  const resultado = document.getElementById('resultadoParImpar');

  AdicionarEvento('verificarBtn', function () {
    const numero = parseInt(input.value);
    if (isNaN(numero)) {
      resultado.textContent = 'Por favor, digite um número válido.';
      return;
    }
    resultado.textContent = `O número ${numero} é ${numero % 2 === 0 ? 'PAR' : 'ÍMPAR'}.`;
  });
}
