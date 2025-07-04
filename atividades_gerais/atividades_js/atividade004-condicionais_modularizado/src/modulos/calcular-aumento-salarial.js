import { AdicionarEvento, obterNumero, mostrarResultado } from '../utils/utils.js';

export function calcularAumento() {
  AdicionarEvento('btnCalcularSalario', () => {
    const salario = obterNumero('salario');

    if (salario === null || salario <= 0) {
      mostrarResultado('resultadoSalario', '<span class="erro">Erro: informe um salário válido e maior que zero.</span>');
      return;
    }

    let novoSalario = salario;

    if (salario <= 1000) {
      novoSalario = salario * 1.10;
    } else if (salario >= 1500) {
      novoSalario = salario * 1.05;
    }

    mostrarResultado('resultadoSalario', `Salário com aumento: R$ ${novoSalario.toFixed(2)}`);
  });
}
