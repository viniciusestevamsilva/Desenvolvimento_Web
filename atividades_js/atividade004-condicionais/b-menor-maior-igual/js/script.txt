document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('btnAnalisar');

  botao.addEventListener('click', function () {
    const numero1 = parseFloat(document.getElementById('num1').value);
    const numero2 = parseFloat(document.getElementById('num2').value);
    const numero3 = parseFloat(document.getElementById('num3').value);
    const resultado = document.getElementById('resultadoNumeros');

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
      resultado.textContent = 'Por favor, preencha todos os campos com números válidos.';
      return;
    }

    if (numero1 === numero2 && numero2 === numero3) {
      resultado.textContent = 'Todos os números são IGUAIS.';
    } else {
      const maior = Math.max(numero1, numero2, numero3);
      const menor = Math.min(numero1, numero2, numero3);
      resultado.textContent = `Maior: ${maior} | Menor: ${menor}`;
    }
  });
});
