let currentPokemons;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    let response = await fetch(url);
    currentPokemons = await response.json();
    console.log('Loaded pokemon', currentPokemons);

    renderPokemonInfo();
}


function renderPokemonInfo() {
    document.getElementById('pokedex-name').innerHTML = currentPokemons['name'];
    document.getElementById('pokemon-img').src = currentPokemons['sprites']['front_default'];
    document.getElementById('about-pokemon').innerHTML += currentPokemons['stats'][0]['base_stat'];
}