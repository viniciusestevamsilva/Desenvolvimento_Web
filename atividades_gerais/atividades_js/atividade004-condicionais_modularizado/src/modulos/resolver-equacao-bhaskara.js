import { AdicionarEvento, obterNumero, mostrarResultado, validarNumeros } from '../utils/utils.js';

export function calcularEquacao() {
  AdicionarEvento('btnCalcularBhaskara', () => {
    const a = obterNumero('inputA');
    const b = obterNumero('inputB');
    const c = obterNumero('inputC');

    if (!validarNumeros(a, b, c) || a === 0) {
      mostrarResultado('resultadoBhaskara', '<span class="erro">Informe valores válidos. O valor de "a" não pode ser zero.</span>');
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      mostrarResultado('resultadoBhaskara', '<span class="erro">A equação não possui raízes reais.</span>');
      return;
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    mostrarResultado('resultadoBhaskara', `
      <p>Δ = ${delta}</p>
      <p>Raízes: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</p>
    `);
  });
}
