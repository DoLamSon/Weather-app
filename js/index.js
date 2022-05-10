const APP_ID = '021f488ad51903cddfde9a2eb31fdf0d';

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
        });
});