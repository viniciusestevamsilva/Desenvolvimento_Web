document.addEventListener("DOMContentLoaded", () => {
  const botaoAdicionar = document.getElementById("adicionarAluno");
  const tabela = document.getElementById("tabelaAlunos").querySelector("tbody");

  // Função para calcular a soma das notas
  function calcularNotaTotal(notas) {
    return notas.reduce((soma, nota) => soma + nota, 0);
  }

  botaoAdicionar.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const frequencia = parseInt(document.getElementById("frequencia").value);
    const notasInput = document
      .getElementById("notas")
      .value.split(",")
      .map((nota) => parseFloat(nota.trim()));

   
    const nomeEhComposto =
      nome.split(" ").filter((palavra) => palavra.length > 0).length >= 2;

    if (!nome || !nomeEhComposto || isNaN(frequencia) || notasInput.length !== 4 || notasInput.some((nota) => isNaN(nota)))
        {alert("Por favor, preencha todos os campos corretamente. O nome deve ser composto e as notas válidas." );
      return;
    }

    const notaTotal = calcularNotaTotal(notasInput);
    const media = notaTotal / 4;
    const notaTotalFormatada = notaTotal.toFixed(2);
    const mediaFormatada = media.toFixed(2);

    let mencao = "";
    if (media >= 9) mencao = "A";
    else if (media >= 7) mencao = "B";
    else if (media >= 5) mencao = "C";
    else mencao = "D";

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${nome}</td>
      <td>${frequencia}%</td>
      <td>${notaTotalFormatada}</td>
      <td>${mediaFormatada}</td>
      <td>${mencao}</td>
      <td><button class="remove-button">Remover</button></td>
    `;

    novaLinha.querySelector("button").addEventListener("click", () => {
      novaLinha.remove();
    });

    tabela.appendChild(novaLinha);

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("frequencia").value = "";
    document.getElementById("notas").value = "";
  });
});
