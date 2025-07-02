document.addEventListener('DOMContentLoaded', function() 
{
  const botao = document.getElementById('enviar');

  botao.addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const idade = Number(document.getElementById('idade').value);
    const mensagem = document.getElementById('mensagem');

    if (nome === '') {
      mensagem.innerText = 'Digite alguma coisa';
      mensagem.style.color = 'red';
    } else if (idade < 18 || isNaN(idade)) {
      mensagem.innerText = 'Tenha 18 anos ou mais';
      mensagem.style.color = 'red';
    } else {
      mensagem.innerText = `Bem-vindo, ${nome}`;
      mensagem.style.color = 'green';
    }

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
  });
});