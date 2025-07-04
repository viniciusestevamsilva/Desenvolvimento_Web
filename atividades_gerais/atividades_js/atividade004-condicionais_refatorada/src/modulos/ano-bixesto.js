import { AdicionarEvento } from '../utils/utils.js';

export function bissexto() {
  AdicionarEvento('btnVerificarAno', () => {
    const ano = parseInt(document.getElementById('ano').value);
    const resultado = document.getElementById('resultadoAno');

    if (isNaN(ano) || ano <= 0) {
      resultado.innerHTML = '<span class="erro">Digite um ano inteiro positivo válido.</span>';
      return;
    }

    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    resultado.innerHTML = bissexto
      ? `<span class="sucesso">${ano} é um ano bissexto!</span>`
      : `<span class="alerta">${ano} NÃO é um ano bissexto.</span>`;
  });
}