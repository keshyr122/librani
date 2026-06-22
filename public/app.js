const animeSearch = async () => {
    const searchText = document.getElementById('search').value;
    const resultContainer = document.getElementById('results');

    resultContainer.innerHTML = 'Searching...';

    try {
        const result = await fetch(`https://api.jikan.moe/v4/anime?q=${searchText}&sfw`);
        const info = await result.json();

        resultContainer.innerHTML = '';

        const animes = info.data;

        if (animes.length === 0) {
            resultContainer.innerHTML = '<p>Anime not found.</p>';
            return;
        }

        animes.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.className = 'anime-card';

            animeCard.innerHTML = `
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <p>Episodes: ${anime.episodes || '?'}</p>
                <p>Year: ${anime.year || 'N/A'}</p>
            `;

            resultContainer.appendChild(animeCard);
        });

    } catch (error) {
        console.error("Has been an error on the search:", error);
        resultContainer.innerHTML = '<p>Error while searching the anime.</p>';
    }
};