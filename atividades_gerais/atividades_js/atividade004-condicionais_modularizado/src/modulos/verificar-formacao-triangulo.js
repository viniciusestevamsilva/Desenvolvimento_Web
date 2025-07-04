import { AdicionarEvento, obterNumero, mostrarResultado, validarNumeros } from '../utils/utils.js';

export function verificarTriangulo() {
  AdicionarEvento('btnVerificarTriangulo', () => {
    const a = obterNumero('lado1');
    const b = obterNumero('lado2');
    const c = obterNumero('lado3');

    if (!validarNumeros(a, b, c) || a <= 0 || b <= 0 || c <= 0) {
      mostrarResultado('resultadoTriangulo', '<span class="erro">Informe valores válidos e maiores que zero para todos os lados.</span>');
      return;
    }

    const podeFormar = a + b > c && a + c > b && b + c > a;

    mostrarResultado('resultadoTriangulo', podeFormar
      ? '<span class="sucesso">É possível formar um triângulo com esses lados.</span>'
      : '<span class="erro">Não é possível formar um triângulo com esses lados.</span>');
  });
}
