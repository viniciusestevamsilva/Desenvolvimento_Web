// Funções utilitárias
function AdicionarEvento(botaoId, funcao) {
  const botao = document.getElementById(botaoId);
  if (!botao) return;
  botao.addEventListener('click', funcao);
}

function obterNumero(id) {
  const valor = parseFloat(document.getElementById(id).value);
  return isNaN(valor) ? null : valor;
}

function mostrarResultado(id, conteudoHtml) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.innerHTML = conteudoHtml;
}

function validarNumeros(...valores) {
  return valores.every(valor => typeof valor === 'number' && !isNaN(valor));
}


function calcularParImpar() {
  AdicionarEvento('verificarBtn', () => {
    const numero = obterNumero('numeroParImpar');
    if (numero === null) {
      mostrarResultado('resultadoParImpar', '<span class="erro"> Por favor, digite um número válido. </span>');
      return;
    }

    const tipo = numero % 2 === 0 ? 'PAR' : 'ÍMPAR';
    mostrarResultado('resultadoParImpar', `O número ${numero} é ${tipo}.`);
  });
}

function calcularMaiorMenor() {
  AdicionarEvento('btnAnalisar', () => {
    const n1 = obterNumero('num1');
    const n2 = obterNumero('num2');
    const n3 = obterNumero('num3');

    if (!validarNumeros(n1, n2, n3)) {
      mostrarResultado('resultadoNumeros', '<span class="erro"> Por favor, preencha todos os campos com números válidos. </span>');
      return;
    }

    const texto = (n1 === n2 && n2 === n3)
      ? 'Todos os números são IGUAIS.'
      : `Maior: ${Math.max(n1, n2, n3)} | Menor: ${Math.min(n1, n2, n3)}`;

    mostrarResultado('resultadoNumeros', texto);
  });
}

function verificarVelocidade() {
  AdicionarEvento('btnVerificarVelocidade', () => {
    const v = obterNumero('velocidade');

    if (v === null || v < 0) {
      mostrarResultado('resultadoVelocidade', '<span class="erro">Por favor, informe uma velocidade válida.</span>');
      return;
    }

    const msg = v <= 60
      ? '<span class="sucesso">Velocidade segura. Dirija com responsabilidade!</span>'
      : '<span class="erro">Velocidade acima do permitido! Reduza imediatamente!</span>';

    mostrarResultado('resultadoVelocidade', msg);
  });
}

function calcularAumento() {
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

function calcularPrecoPassagem() {
  AdicionarEvento('btnCalcular', () => {
    const distancia = obterNumero('distancia');

    if (distancia === null || distancia <= 0) {
      mostrarResultado('resultadoPreco', '<span class="erro">Por favor, insira uma distância válida maior que 0.</span>');
      return;
    }

    const preco = distancia <= 200 ? distancia * 0.70 : distancia * 0.40;
    mostrarResultado('resultadoPreco', `<span class="sucesso">Preço da passagem: R$ ${preco.toFixed(2)}</span>`);
  });
}

function calcularAnoBissexto() {
  AdicionarEvento('btnVerificarAno', () => {
    const ano = obterNumero('ano');

    if (ano === null || ano <= 0) {
      mostrarResultado('resultadoAno', '<span class="erro">Digite um ano inteiro positivo válido.</span>');
      return;
    }

    const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    mostrarResultado('resultadoAno', isBissexto
      ? `<span class="sucesso">${ano} é um ano bissexto!</span>`
      : `<span class="erro">${ano} NÃO é um ano bissexto.</span>`);
  });
}

function verificarTriangulo() {
  AdicionarEvento('btnVerificarTriangulo', () => {
    const a = obterNumero('lado1');
    const b = obterNumero('lado2');
    const c = obterNumero('lado3');

    if (!validarNumeros(a, b, c) || a <= 0 || b <= 0 || c <= 0) {
      mostrarResultado('resultadoTriangulo', '<span class="erro">Informe valores válidos e maiores que zero para todos os lados.</span>');
      return;
    }

    const podeFormar = a + b > c && a + c > b && b + c > a;

    mostrarResultado('resultadoTriangulo', podeFormar
      ? '<span class="sucesso">É possível formar um triângulo com esses lados.</span>'
      : '<span class="erro">Não é possível formar um triângulo com esses lados.</span>');
  });
}

function calcularEquacao() {
  AdicionarEvento('btnCalcularBhaskara', () => {
    const a = obterNumero('inputA');
    const b = obterNumero('inputB');
    const c = obterNumero('inputC');

    if (!validarNumeros(a, b, c) || a === 0) {
      mostrarResultado('resultadoBhaskara', '<span class="erro">Informe valores válidos. O valor de "a" não pode ser zero.</span>');
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      mostrarResultado('resultadoBhaskara', '<span class="erro">A equação não possui raízes reais.</span>');
      return;
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    mostrarResultado('resultadoBhaskara', `
      <p>Δ = ${delta}</p>
      <p>Raízes: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</p>
    `);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  calcularParImpar();
  calcularMaiorMenor();
  verificarVelocidade();
  calcularAumento();
  calcularPrecoPassagem();
  calcularAnoBissexto();
  verificarTriangulo();
  calcularEquacao();
});
