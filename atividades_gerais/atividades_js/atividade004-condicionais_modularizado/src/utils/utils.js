export function AdicionarEvento(botaoId, funcao) {
  const botao = document.getElementById(botaoId);
  botao.addEventListener('click', funcao);
}

export function obterNumero(id) {
  const valor = parseFloat(document.getElementById(id).value);
  return isNaN(valor) ? null : valor;
}

export function mostrarResultado(id, conteudoHtml) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.innerHTML = conteudoHtml;
}

export function validarNumeros(...valores) {
  return valores.every(v => typeof v === 'number' && !isNaN(v));
}