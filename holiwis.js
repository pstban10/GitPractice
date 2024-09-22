
document.getElementById('botonCentral').addEventListener('click', function () {
    fetch('https://cataas.com/cat?json=true')
        .then(response => response.json())
        .then(data => {
            const catContainer = document.getElementById('pantalla');
            const imageUrl = `https://cataas.com/cat/${data._id}`;
            catContainer.innerHTML = `<img src="${imageUrl}" alt="Cat Image">`;
        })
        .catch(error => console.error('Error:', error));
});