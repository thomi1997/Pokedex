let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded pokemon', currentPokemon);

    renderPokemonInfo();
}


function renderPokemonInfo() {
    let container = document.getElementById('pokedex').innerHTML = currentPokemon['name'];
    console.log('loaded', currentPokemon['weight']);
}