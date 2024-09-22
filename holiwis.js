document.getElementById('botonCentral').addEventListener('click', function () {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('pantalla').innerText = dateTimeString;
});