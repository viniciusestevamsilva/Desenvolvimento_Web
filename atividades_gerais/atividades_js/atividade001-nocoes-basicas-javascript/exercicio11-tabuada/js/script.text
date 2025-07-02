document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mostrar').addEventListener('click', function () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

   
    resultado.innerHTML = '';

    if (numero === '') {
        resultado.textContent = 'Por favor, digite um número.';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement('p');
        linha.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(linha);
    }
});
});