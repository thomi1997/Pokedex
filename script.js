let allPokemons = [];
let allpokedexColor = [];
let numberPokemons = 30;


async function loadPokemon() {
    for (let i = 1; i < numberPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemons = await response.json();
        allPokemons.push(currentPokemons);
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
    }
    colorPushPokedex();
}


function renderPokemonProfil() {
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i < allPokemons.length; i++) {
        let name = allPokemons[i]['name'];
        let Name = name.charAt(0).toUpperCase() + name.slice(1);
        let types = allPokemons[i]['types'];
        document.getElementById('pokedex').innerHTML += htmlRenderPokemonProfil(Name, i);

        for (let j = 0; j < types.length; j++) {
            let type = types[j]['type']['name'];
            let Type = type.charAt(0).toUpperCase() + type.slice(1);
            document.getElementById(`pokedex-types${i}`).innerHTML += htmlRenderPokemontypes(Type, j);
        }
    }
}


function renderPokemonDetailProfil(i) {
    let stats = allPokemons[i]['stats'];
    let name = allPokemons[i]['name'];
    let Name = name.charAt(0).toUpperCase() + name.slice(1);
    let types = allPokemons[i]['types'];
    document.getElementById('pokemon-stats').innerHTML += htmlRenderPokemonHeadProfil(Name, i);

    let height = allPokemons[i]['height'];
    let weight = allPokemons[i]['weight'];
    document.getElementById('stat').innerHTML += htmlHeightAndWeight(height, weight);

    for (let j = 0; j < stats.length; j++) {
        let statName = stats[j]['stat']['name'];
        let StatName = statName.charAt(0).toUpperCase() + statName.slice(1);
        let baseStat = stats[j]['base_stat'];
        let nr = stats[j]['base_stat'];
        let nrBar = nr / 1.25;
        document.getElementById('stat').innerHTML += htmlRenderPokemonDetailProfil(StatName, baseStat, nrBar);
    }

    for (let k = 0; k < types.length; k++) {
        let type = types[k]['type']['name'];
        let Type = type.charAt(0).toUpperCase() + type.slice(1);
        document.getElementById('types-info').innerHTML += htmlRenderPokemontypesInfo(Type);
    }
    colorPushPokedexInfo(i);
    showPokemonDetail();
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
        const color = allpokedexColor[i]['color']['name'];
        document.getElementById(`type-color${i}`).style.backgroundColor += `${color}`;
    }
}


function colorPushPokedexInfo(i) {
        color = allpokedexColor[i]['color']['name'];
        document.getElementById(`type-color-info`).style.backgroundColor += `${color}`;
}


function showPokemonDetail() {
    document.getElementById('pokemon-stats').classList.add('is-visible');
}

function closePokemonDetail() {
    document.getElementById('pokemon-stats').innerHTML = '';
    document.getElementById('pokemon-stats').classList.remove('is-visible');
}


function namesFilter() { /*search gibt das wieder was ich ins inputfeld eingebe!!*/
    let search = document.getElementById('search-pokemon').value;
    search = search.toLowerCase();
    document.getElementById('pokedex').innerHTML = '';
    pokemonNameDetail(search);
}


function pokemonNameDetail(search) {
    for (let i = 0; i < allPokemons.length; i++) {
        let name = allPokemons[i].name;
        let Name = name.charAt(0).toUpperCase() + name.slice(1);
        let types = allPokemons[i]['types'];

        for (let j = 0; j < types.length; j++) {
            let type = types[j]['type']['name'];
            let Type = type.charAt(0).toUpperCase() + type.slice(1);
            pushTheCorrectPokemon(Name, i, search, Type, j);
        }
    }
}


function pushTheCorrectPokemon(Name, i, search, Type, j) {
    if (Name.toLowerCase().includes(search)) {
        document.getElementById('pokedex').innerHTML += htmlRenderPokemonProfil(Name, i);
        document.getElementById(`pokedex-types${i}`).innerHTML += htmlRenderPokemontypes(Type, j);
        color = allpokedexColor[i]['color']['name'];
        document.getElementById(`type-color${i}`).style.backgroundColor += `${color}`;
    }
}