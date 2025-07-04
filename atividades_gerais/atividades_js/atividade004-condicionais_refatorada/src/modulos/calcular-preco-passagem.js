import { AdicionarEvento, obterNumero, mostrarResultado } from '../utils/utils.js';

export function calcularPrecoPassagem() {
  AdicionarEvento('btnCalcular', () => {
    const distancia = obterNumero('distancia');

    if (distancia === null || distancia <= 0) {
      mostrarResultado('resultadoPreco', '<span class="erro">Por favor, insira uma distância válida maior que 0.</span>');
      return;
    }

    const preco = distancia <= 200 ? distancia * 0.70 : distancia * 0.40;
    mostrarResultado('resultadoPreco', `<span class="sucesso">Preço da passagem: R$ ${preco.toFixed(2)}</span>`);
  });
}
