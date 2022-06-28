let currentPokemons;
let pokemonsNames = [];
let numberPokemons = 151;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    let response = await fetch(url);
    currentPokemons = await response.json();
    console.log('Loaded pokemon', currentPokemons);

    renderPokemonInfo();
    loadPokemonName();
}


async function loadPokemonName() {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=3&offset=0`;
    let response = await fetch(url);
    let AllPokemonsNames = await response.json();
    pokemonsNames.push(AllPokemonsNames);
    RenderPokemonsNames();
    console.log(PokemonsNames);
}


function RenderPokemonsNames() {
    let names = pokemonsNames;
    let container = document.getElementById('pokedex');
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        container.innerHTML += /*html*/`<div>Pokemon ${name}<div>`;
    }
}


function renderPokemonInfo() {
    document.getElementById('pokedex-name').innerHTML = /*html*/`
        <div>
            <p>${currentPokemons['name']}</p>
            <p># 1</p>
        </div>
        `;
    document.getElementById('pokemon-img').src += `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png`; 
    document.getElementById('about-pokemon-HP-1').innerHTML += currentPokemons['stats'][0]['base_stat'];
    document.getElementById('about-pokemon-ATK-2').innerHTML += currentPokemons['stats'][1]['base_stat'];
    document.getElementById('about-pokemon-DEF-3').innerHTML += currentPokemons['stats'][2]['base_stat'];
    document.getElementById('about-pokemon-S-ATK-4').innerHTML += currentPokemons['stats'][3]['base_stat'];
    document.getElementById('about-pokemon-S-DEF-5').innerHTML += currentPokemons['stats'][4]['base_stat'];
    document.getElementById('about-pokemon-SPEED-6').innerHTML += currentPokemons['stats'][5]['base_stat'];
    document.getElementById('pokemon-typ').innerHTML = /*html*/`
        <div class="pokemon-typen">
            <p>Typ ${currentPokemons['types'][0]['type']['name']}</p>
        </div>
        `;
}