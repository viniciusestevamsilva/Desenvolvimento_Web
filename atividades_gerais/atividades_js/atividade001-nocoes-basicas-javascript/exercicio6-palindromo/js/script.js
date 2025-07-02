document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('verificar').addEventListener('click', function () {

    const palavra = document.getElementById('palavra').value;

    const invertida = palavra.split('').reverse().join('');

    const resultado = document.getElementById('resultado');

    if (palavra === invertida) {
        resultado.textContent = 'É um palíndromo.';

    } else {
        resultado.textContent = 'Não é um palíndromo.';
    }
    
    });

});