import { AdicionarEvento } from '../utils/utils.js';

export function triangulo() {
  AdicionarEvento('btnVerificarTriangulo', () => {
    const a = parseFloat(document.getElementById('lado1').value);
    const b = parseFloat(document.getElementById('lado2').value);
    const c = parseFloat(document.getElementById('lado3').value);
    const resultado = document.getElementById('resultadoTriangulo');

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
      resultado.innerHTML = '<span class="erro">Informe valores válidos e maiores que zero para todos os lados.</span>';
      return;
    }

    const podeFormar = a + b > c && a + c > b && b + c > a;

    resultado.innerHTML = podeFormar
      ? '<span class="sucesso">É possível formar um triângulo com esses lados.</span>'
      : '<span class="alerta">Não é possível formar um triângulo com esses lados.</span>';
  });
}