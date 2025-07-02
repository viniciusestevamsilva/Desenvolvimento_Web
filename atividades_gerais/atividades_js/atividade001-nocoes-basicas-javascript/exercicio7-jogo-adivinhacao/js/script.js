document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('verificar').addEventListener('click', function () {

    const palpite = +document.getElementById('palpite').value;

    const resultado = document.getElementById('resultado');

    const secreto = 5 ;

    if (palpite > secreto) {

        resultado.textContent = 'Muito alto!';

    } else if (palpite < secreto) {
        resultado.textContent = 'Muito baixo!';

    } else {
        resultado.textContent = 'Você acertou!';
    }
    });

});