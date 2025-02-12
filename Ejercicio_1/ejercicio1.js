let contador = 0;
const mostrarContador = document.getElementById('contador');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDisminuir = document.getElementById('btn-disminuir');
const btnResetear = document.getElementById('btn-resetear');

btnAumentar.addEventListener('click', () => {
    if (contador < 10) {
        contador++;
        mostrarContador.textContent = contador;
    } else {
        alert('No puede ser mayor de 10');
    }
});

btnDisminuir.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        mostrarContador.textContent = contador;
    } else {
        alert('No puede ser menor de 0');
    }
});

btnResetear.addEventListener('click', () => {
    contador = 0;
    mostrarContador.textContent = contador;
});
