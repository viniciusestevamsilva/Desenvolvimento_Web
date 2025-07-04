
export function AdicionarEvento(botaoId, funcao) {
  const botao = document.getElementById(botaoId);
  if (!botao) return;
  botao.addEventListener('click', funcao);
}