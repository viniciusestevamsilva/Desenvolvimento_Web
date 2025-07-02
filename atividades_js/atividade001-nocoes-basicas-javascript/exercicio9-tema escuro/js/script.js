document.addEventListener('DOMContentLoaded', function () {
    const body = document.getElementById('corpo');
    const header = document.getElementById('cabecalho');
    const main = document.getElementById('principal');
    const footer = document.getElementById('rodape');
    const btnTrocar = document.getElementById('btnTrocar');

    let temaClaro = true; 

    btnTrocar.addEventListener('click', function () {
        if (temaClaro) {

            body.style.backgroundColor = '#121212';
            body.style.color = 'white';

            header.style.backgroundColor = '#1e1e1e';
            header.style.color = 'white';

            main.style.backgroundColor = '#333';
            main.style.color = 'white';

            footer.style.color = '#ccc';
        } else {
   
            body.style.backgroundColor = '#f2f2f2';
            body.style.color = 'black';

            header.style.backgroundColor = '#0088f7';
            header.style.color = 'white';

            main.style.backgroundColor = 'white';
            main.style.color = 'black';

            footer.style.color = '#333';
        }

        temaClaro = !temaClaro;
    });
});
