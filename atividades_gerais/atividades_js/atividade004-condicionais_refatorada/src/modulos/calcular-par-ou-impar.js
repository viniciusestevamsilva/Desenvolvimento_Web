import { AdicionarEvento, obterNumero, mostrarResultado } from '../utils/utils.js';

export function calcularParImpar() {
  AdicionarEvento('verificarBtn', () => {
    const numero = obterNumero('numeroParImpar');
    if (numero === null) {
      mostrarResultado('resultadoParImpar', 'Por favor, digite um número válido.');
      return;
    }

    const tipo = numero % 2 === 0 ? 'PAR' : 'ÍMPAR';
    mostrarResultado('resultadoParImpar', `O número ${numero} é ${tipo}.`);
  });
}