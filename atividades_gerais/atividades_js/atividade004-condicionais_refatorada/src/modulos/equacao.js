import { AdicionarEvento } from '../utils/utils.js';

export function equacao() {
  AdicionarEvento('btnCalcular', () => {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);
    const resultado = document.getElementById('resultadoBhaskara');

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      resultado.innerHTML = '<span class="erro">Informe valores válidos. O valor de "a" não pode ser zero.</span>';
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      resultado.innerHTML = '<span class="alerta">A equação não possui raízes reais.</span>';
      return;
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    resultado.innerHTML = `
      <p>Δ = ${delta}</p>
      <p>Raízes: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</p>
    `;
  });
}