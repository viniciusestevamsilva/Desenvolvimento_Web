document.addEventListener('DOMContentLoaded', function () {
  
  const btn = document.getElementById('btnVerificarAno');
  const resultado = document.getElementById('resultadoAno');

  btn.addEventListener('click', function () {
    const ano = parseInt(document.getElementById('ano').value);

    if (isNaN(ano) || ano <= 0) {
      resultado.innerHTML = '<span class="erro">Digite um ano inteiro positivo válido.</span>';
      return;
    }

    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    if (bissexto) {
      resultado.innerHTML = `<span class="sucesso">${ano} é um ano bissexto!</span>`;
    } else {
      resultado.innerHTML = `<span class="alerta">${ano} NÃO é um ano bissexto.</span>`;
    }

  });
});