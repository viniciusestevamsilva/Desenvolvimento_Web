import { AdicionarEvento, obterNumero, mostrarResultado, validarNumeros } from '../utils/utils.js';

export function calcularMaiorMenor() {
  AdicionarEvento('btnAnalisar', () => {
    const n1 = obterNumero('num1');
    const n2 = obterNumero('num2');
    const n3 = obterNumero('num3');

    if (!validarNumeros(n1, n2, n3)) {
      mostrarResultado('resultadoNumeros', '<span class="erro"> Por favor, preencha todos os campos com números válidos.</span>');
      return;
    }

    const texto = (n1 === n2 && n2 === n3)
      ? 'Todos os números são IGUAIS.'
      : `Maior: ${Math.max(n1, n2, n3)} | Menor: ${Math.min(n1, n2, n3)}`;

    mostrarResultado('resultadoNumeros', texto);
  });
}