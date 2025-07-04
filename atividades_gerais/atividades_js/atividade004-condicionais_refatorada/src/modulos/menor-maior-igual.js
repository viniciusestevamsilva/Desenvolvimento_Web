import { AdicionarEvento } from '../utils/utils.js';

export function menormaior() {
  AdicionarEvento('btnAnalisar', () => {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const n3 = parseFloat(document.getElementById('num3').value);
    const res = document.getElementById('resultadoNumeros');

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      res.textContent = 'Por favor, preencha todos os campos com números válidos.';
      return;
    }

    if (n1 === n2 && n2 === n3) {
      res.textContent = 'Todos os números são IGUAIS.';
    } else {
      res.textContent = `Maior: ${Math.max(n1, n2, n3)} | Menor: ${Math.min(n1, n2, n3)}`;
    }
  });
}
