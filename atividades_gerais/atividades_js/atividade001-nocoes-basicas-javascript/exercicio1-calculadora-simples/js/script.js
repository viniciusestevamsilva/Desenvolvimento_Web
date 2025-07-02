document.addEventListener('DOMContentLoaded', function () {
    
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const resultado = document.getElementById('resultado');

    document.getElementById('btnSomar').addEventListener('click', function () {
        const valorFinal = parseFloat(numero1.value) + parseFloat(numero2.value);
        resultado.textContent = `Resultado: ${valorFinal}`;
    });

    document.getElementById('btnSubtrair').addEventListener('click', function () {
        const valorFinal = parseFloat(numero1.value) - parseFloat(numero2.value);
        resultado.textContent = `Resultado: ${valorFinal}`;
    });

    document.getElementById('btnMultiplicar').addEventListener('click', function () {
        const valorFinal = parseFloat(numero1.value) * parseFloat(numero2.value);
        resultado.textContent = `Resultado: ${valorFinal}`;
    });

    document.getElementById('btnDividir').addEventListener('click', function () {
        const divisor = parseFloat(numero2.value);
        if (divisor === 0) {
            resultado.textContent = 'Erro: Divisão por zero';
        } else {
            const valorFinal = parseFloat(numero1.value) / divisor;
            resultado.textContent = `Resultado: ${valorFinal}`;
        }
    });
});