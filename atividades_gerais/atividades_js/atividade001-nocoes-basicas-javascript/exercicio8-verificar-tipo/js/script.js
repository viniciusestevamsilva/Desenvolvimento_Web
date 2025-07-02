document.addEventListener('DOMContentLoaded', function () {

    const botao = document.getElementById('mostrar');

    botao.addEventListener('click', function () {
        const valor = document.getElementById('entrada').value;
        const tipo = document.getElementById('tipo');

        const convertido = +valor;

        if (valor === '') {
            tipo.textContent = 'Campo vazio';
    
        } else if (convertido == valor) {
            tipo.textContent = 'Número';
            
        } else {
            tipo.textContent = 'Texto';
        }
    });

});
