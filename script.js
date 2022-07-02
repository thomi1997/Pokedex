let currentPokemons;
let AllPokemonsNames;
let allPokemons = [];
let numberPokemons = 30;


async function loadPokemon() {
    for (let i = 1; i < numberPokemons; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemons = await response.json();
    allPokemons.push(currentPokemons);
    console.log('Loaded pokemon', currentPokemons);
    }
    renderPokemonProfil();
    renderPokemonInfo();
}


function renderPokemonProfil() {
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i < allPokemons.length; i++) {
        const id = allPokemons[i]['name'];
        document.getElementById('pokedex').innerHTML += /*html*/`
        <div class="pokedex-div">
            <div class="pokedex-name-type">
                <h2>
                    ${i, id}
                </h2>
                <h3>
                    duhjvghdv
                </h3>
            </div>
            <div id="pokedex-img-div">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${i+1}.png" class="pokemon-img" id="pokedex-img">
            </div>
        </div>
        `;
    }
}


function renderPokemonInfo() {
    document.getElementById('pokedex-name').innerHTML = /*html*/`
        <div>
            <p>${allPokemons[0]['name']}</p>
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