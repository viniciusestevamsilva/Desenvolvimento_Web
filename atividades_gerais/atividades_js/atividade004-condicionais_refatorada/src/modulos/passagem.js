import { AdicionarEvento } from '../utils/utils.js';

export function passagem() {
  AdicionarEvento('btnCalcular', () => {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const resultado = document.getElementById('resultadoPreco');

    if (isNaN(distancia) || distancia <= 0) {
      resultado.innerHTML = '<span class="erro">Por favor, insira uma distância válida maior que 0.</span>';
      return;
    }

    const preco = distancia <= 200 ? distancia * 0.70 : distancia * 0.40;
    resultado.innerHTML = `<span class="sucesso">Preço da passagem: R$ ${preco.toFixed(2)}</span>`;
  });
}