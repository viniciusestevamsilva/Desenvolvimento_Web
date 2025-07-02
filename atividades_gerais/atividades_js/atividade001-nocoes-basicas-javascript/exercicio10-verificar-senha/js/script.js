document.addEventListener('DOMContentLoaded', function () {

    const senha = document.getElementById('senha');
    const botao = document.getElementById('verificar');
    const mensagem = document.getElementById('mensagem');

    botao.addEventListener('click', function () {
        const valor = senha.value;

     
        const tamanhoValido = valor.length >= 8;
        const temMinuscula = valor !== valor.toUpperCase(); 
        const temMaiuscula = valor !== valor.toLowerCase();


        let temNumero = false;
        
        const numeros = '0123456789';

        for (let i = 0; i < valor.length; i++) {

            if (numeros.includes(valor[i])) {

                temNumero = true;
                break;
            }
        }

        
        if (valor === '') {
            mensagem.textContent = 'Digite uma senha.';

        } else if (tamanhoValido && temMinuscula && temMaiuscula && temNumero) {
            mensagem.textContent = 'Senha forte';

        } else {
            mensagem.textContent = 'Senha fraca. Use pelo menos:\n- 8 caracteres\n- Letra maiúscula\n- Letra minúscula\n- Número';
        }
    });
});
