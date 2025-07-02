document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('verificarBtn').addEventListener('click', function () {

        const input = document.getElementById('numero');

        const numero = parseFloat(input.value);

        const resultado = document.getElementById('resultado');

        if (numero > 0) {

            resultado.textContent = 'O número é positivo';
            
        } else if (numero < 0) {

            resultado.textContent = 'O número é negativo';

        } else {
            
            resultado.textContent = 'O número é zero';
        }
    });
});