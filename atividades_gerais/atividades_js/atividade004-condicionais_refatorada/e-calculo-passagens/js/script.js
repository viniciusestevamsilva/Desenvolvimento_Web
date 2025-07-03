document.addEventListener('DOMContentLoaded', function () {
  
  const inputDistancia = document.getElementById('distancia');
  const botaoCalcular = document.getElementById('btnCalcular');
  const resultado = document.getElementById('resultadoPreco');

  botaoCalcular.addEventListener('click', function () {
    const distancia = parseFloat(inputDistancia.value);

    if (isNaN(distancia) || distancia <= 0) {
      resultado.innerHTML = '<span class="erro">Por favor, insira uma distância válida maior que 0.</span>';
      return;
    }

    let preco = 0;

    if (distancia <= 200) {
      preco = distancia * 0.70;
    } else {
      preco = distancia * 0.40;
    }

    resultado.innerHTML = `<span class="sucesso">Preço da passagem: R$ ${preco.toFixed(2)}</span>`;
  });
});