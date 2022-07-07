let allPokemons = [];
let allpokedexColor = [];
let numberPokemons = 5;


async function loadPokemon() {
    for (let i = 1; i < numberPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemons = await response.json();
        allPokemons.push(currentPokemons);
        console.log('Loaded pokemon', currentPokemons);
    }
    loadPokemonTypeNumber();
    renderPokemonProfil();
}


async function loadPokemonTypeNumber() {
    for (let i = 1; i < numberPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
        let response = await fetch(url);
        let pokedexColorAsJson = await response.json();
        allpokedexColor.push(pokedexColorAsJson);
        console.log('Loaded pokemon color', allpokedexColor);
    }
    colorPushPokedex();
}


function renderPokemonProfil() {
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i < allPokemons.length; i++) {
        const name = allPokemons[i]['name'];
        let types = allPokemons[i]['types'];
        document.getElementById('pokedex').innerHTML += htmlRenderPokemonProfil(name, i);

        for (let j = 0; j < types.length; j++) {
            let type = types[j]['type']['name'];
            document.getElementById(`pokedex-types${i}`).innerHTML += /*html*/`
            <span class="pokedex-types text-align-center">
                ${j, type}
            </span>
            `;
        }
    }
}


function renderPokemonDetailProfil(i) {
    let stats = allPokemons[i]['stats'];
    let name = allPokemons[i]['name'];
    document.getElementById('pokemon-stats').innerHTML += htmlRenderPokemonHeadProfil(name, i);
    for (let j = 0; j < 6; j++) {
        let statName = stats[j]['stat']['name'];
        let baseStat = stats[j]['base_stat'];
        let infoContainer = document.getElementById(`stat${i}`)
        infoContainer.innerHTML += htmlRenderPokemonDetailProfil(statName, baseStat);
    }
}


function moveLeft(i) {
    if (i !== 0) {
        i--
    }else{
        i = allPokemons.length - 1;
    }
    document.getElementById('pokemon-stats').innerHTML = '';
    renderPokemonDetailProfil(i);
}


function moveRight(i) {
    if (i < allPokemons.length - 1) {
        i++
    }else{
        i = 0;
    }
    document.getElementById('pokemon-stats').innerHTML = '';
    renderPokemonDetailProfil(i);
}


function colorPushPokedex() {
    for (let i = 0; i < allpokedexColor.length; i++) {
        const color = allpokedexColor[i]['color'];
        document.getElementById(`type-color${i}`).style.backgroundColor += `${color['name']}`;
    }
}


function showPokemonDetail() {
    document.getElementById('pokemon-stats').classList.add('is-visible');
}

function closePokemonDetail() {
    document.getElementById('pokemon-stats').classList.remove('is-visible');
}