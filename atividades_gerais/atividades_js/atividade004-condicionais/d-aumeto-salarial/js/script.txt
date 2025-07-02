document.addEventListener('DOMContentLoaded', function () {
  
  const inputSalario = document.getElementById('salario');
  const botaoCalcular = document.getElementById('btnCalcularSalario');
  const resultado = document.getElementById('resultadoSalario');

  botaoCalcular.addEventListener('click', function () {
    const salario = parseFloat(inputSalario.value);

    if (isNaN(salario) || salario <= 0) {
      resultado.innerHTML = '<span class="alerta">Erro: informe um salário válido e maior que zero.</span>';
      return;
    }

    let novoSalario = salario;

    if (salario <= 1000) {
      novoSalario = salario * 1.10;
      resultado.innerHTML = `Salário com aumento de 10%: R$ ${novoSalario.toFixed(2)}`;
    } else if (salario >= 1500) {
      novoSalario = salario * 1.05;
      resultado.innerHTML = `Salário com aumento de 5%: R$ ${novoSalario.toFixed(2)}`;
    } else {
      resultado.innerHTML = `Salário permanece o mesmo: R$ ${salario.toFixed(2)}`;
    }

  });
});
