document.addEventListener('DOMContentLoaded', function () {

    const input = document.getElementById('tarefa');

    const lista = document.getElementById('lista');

    document.getElementById('adicionar').addEventListener('click', function () {

        const item = document.createElement('li');
        item.textContent = input.value;
        lista.appendChild(item);
        input.value = '';
        
    });
});