import { AdicionarEvento, obterNumero, mostrarResultado } from '../utils/utils.js';

export function verificarVelocidade() {
  AdicionarEvento('btnVerificarVelocidade', () => {
    const v = obterNumero('velocidade');

    if (v === null || v < 0) {
      mostrarResultado('resultadoVelocidade', '<span class="alerta">Por favor, informe uma velocidade válida.</span>');
      return;
    }

    const msg = v <= 60
      ? '<span class="seguro">Velocidade segura. Dirija com responsabilidade!</span>'
      : '<span class="alerta">Velocidade acima do permitido! Reduza imediatamente!</span>';

    mostrarResultado('resultadoVelocidade', msg);
  });
}
