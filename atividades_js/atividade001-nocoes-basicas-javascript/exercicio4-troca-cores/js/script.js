document.addEventListener('DOMContentLoaded', function () {
    
    const quadrado = document.getElementById('quadrado');

    document.getElementById('vermelho').addEventListener('click', function () {
        quadrado.style.backgroundColor = 'red';
    });

    document.getElementById('verde').addEventListener('click', function () {
        quadrado.style.backgroundColor = 'green';
    });

    document.getElementById('azul').addEventListener('click', function () {
        quadrado.style.backgroundColor = 'blue';
    });
});
