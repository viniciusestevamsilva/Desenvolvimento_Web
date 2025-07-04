import { AdicionarEvento } from '../utils/utils.js';

export function velocidade() {
  AdicionarEvento('btnVerificarVelocidade', () => {
    const v = Number(document.getElementById('velocidade').value);
    const res = document.getElementById('resultadoVelocidade');

    if (isNaN(v) || v < 0) {
      res.innerHTML = '<span class="alerta">Por favor, informe uma velocidade válida.</span>';
      return;
    }

    res.innerHTML = v <= 60
      ? '<span class="seguro">Velocidade segura. Dirija com responsabilidade!</span>'
      : '<span class="alerta">Velocidade acima do permitido! Reduza imediatamente!</span>';
  });
}