document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionar = document.getElementById('adicionarAluno');
    const tabela = document.getElementById('tabelaAlunos').querySelector('tbody');

    botaoAdicionar.addEventListener('click', () => {
        const nome = document.getElementById('nome').value.trim();
        const frequencia = parseInt(document.getElementById('frequencia').value);
        const notasInput = document.getElementById('notas').value.split(',').map(notas => parseFloat(notas.trim()));

        if (!nome || isNaN(frequencia) || notasInput.length !== 4 || notasInput.some(notas => isNaN(notas))) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const media = notasInput.reduce((a, b) => a + b, 0) / 4;
        const mediaFormatada = media.toFixed(2);

        let mencao = '';
        if (media >= 9) mencao = 'A';
        else if (media >= 7) mencao = 'B';
        else if (media >= 5) mencao = 'C';
        else mencao = 'D';

        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${frequencia}%</td>
            <td>${mediaFormatada}</td>
            <td>${mencao}</td>
            <td><button class="remove-button">Remover</button></td>
        `;

        novaLinha.querySelector('button').addEventListener('click', () => {
            novaLinha.remove();
        });

        tabela.appendChild(novaLinha);

      
        document.getElementById('nome').value = '';
        document.getElementById('frequencia').value = '';
        document.getElementById('notas').value = '';
    });
});
