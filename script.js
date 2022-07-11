let allPokemons = [];
let allpokedexColor = [];
let numberPokemons = 11;


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
            document.getElementById(`pokedex-types${i}`).innerHTML += htmlRenderPokemontypes(type, j);
        }
    }
}


function renderPokemonDetailProfil(i) {
    let stats = allPokemons[i]['stats'];
    let name = allPokemons[i]['name'];
    let types = allPokemons[i]['types'];
    document.getElementById('pokemon-stats').innerHTML += htmlRenderPokemonHeadProfil(name, i);

    let height = allPokemons[i]['height'];
    let weight = allPokemons[i]['weight'];
    document.getElementById('stat').innerHTML += /*html*/`
    <div class="height-and-weight">
        <div>
            <p>
                Height
            </p> 
            <p>
                ${height}
            </p>
        </div>            
        <div>
            <p>
                Weight
            </p> 
            <p>
                ${weight}
            </p>
        </div>
    </div>
    `;

    for (let j = 0; j < stats.length; j++) {
        let statName = stats[j]['stat']['name'];
        let baseStat = stats[j]['base_stat'];
        document.getElementById('stat').innerHTML += htmlRenderPokemonDetailProfil(statName, baseStat, height, weight);
    }

    for (let k = 0; k < types.length; k++) {
        let type = types[k]['type']['name'];
        document.getElementById('pokemon-typ').innerHTML += /*html*/`
        <div>
            <p>
                ${type}
            </p>
        </div>
        `;
    }
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


function showPokemonDetail() {
    document.getElementById('pokemon-stats').classList.add('is-visible');
}

function closePokemonDetail() {
    document.getElementById('pokemon-stats').innerHTML = '';
    document.getElementById('pokemon-stats').classList.remove('is-visible');
}