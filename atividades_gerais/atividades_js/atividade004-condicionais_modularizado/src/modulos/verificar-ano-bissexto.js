import { AdicionarEvento, obterNumero, mostrarResultado } from '../utils/utils.js';

export function calcularAnoBissexto() {
  AdicionarEvento('btnVerificarAno', () => {
    const ano = obterNumero('ano');

    if (ano === null || ano <= 0) {
      mostrarResultado('resultadoAno', '<span class="erro">Digite um ano inteiro positivo válido.</span>');
      return;
    }

    const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    mostrarResultado('resultadoAno', isBissexto
      ? `<span class="sucesso">${ano} é um ano bissexto!</span>`
      : `<span class="erro">${ano} NÃO é um ano bissexto.</span>`);
  });
}
