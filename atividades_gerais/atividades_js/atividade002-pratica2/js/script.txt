document.addEventListener('DOMContentLoaded', function () {

    const fundo = document.getElementById('btnFundo');
    const corpo = document.getElementById('corpo');
    const caixa = document.getElementById('btncaixa');
    const quadrado = document.getElementById('quadrado');
    const texto = document.getElementById('btnTexto');
    const cortxt = document.getElementById('corpo');
    

    fundo.addEventListener('input', function () {
        corpo.style.backgroundColor = fundo.value;
    });

    texto.addEventListener('input', function () {
        cortxt.style.color = texto.value;
    });

    caixa.addEventListener('input', function () {
        quadrado.style.backgroundColor = caixa.value;
    });

    
});