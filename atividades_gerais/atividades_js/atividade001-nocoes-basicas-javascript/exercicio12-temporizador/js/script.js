document.addEventListener('DOMContentLoaded', function () {

    let tempo = 10;
    const display = document.getElementById("temporizador");

    const intervalo = setInterval(() => {

      display.textContent = tempo;

      if (tempo === 0) {
        clearInterval(intervalo);
        display.textContent = "Tempo esgotado!";

      } else {
        tempo--;
      }
    }, 1000);
});
