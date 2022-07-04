let allPokemons = [];
let allpokedexColor = [];
let numberPokemons = 2;


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
    renderPokemonDetailProfil();
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
        const id = allPokemons[i]['name'];
        let types = allPokemons[i]['types'];
        console.log('typen', types);
        document.getElementById('pokedex').innerHTML += /*html*/`
        <div id="type-color${i}" class="pokedex-div">
            <div class="pokedex-name-type">
                <h2>
                    ${i, id}
                </h2>
                <div class="pokedex-types-div" id="pokedex-types${i}">
                </div>
            </div>
            <div id="pokedex-img-div">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${i + 1}.png" class="pokemon-img" id="pokedex-img">
            </div>
        </div>
        `;

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


function renderPokemonDetailProfil() {
    document.getElementById('pokemon-stats').innerHTML = '';
    for (let i = 0; i < allPokemons.length; i++) {
        let stats = allPokemons[i]['stats'];
        let name = allPokemons[i]['name'];
        console.log('statistiken', stats);
        document.getElementById('pokemon-stats').innerHTML += /*html*/`
        <div>
            <div class="pokedex-info">
                ${name}
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${i + 1}.png" class="pokemon-img" id="pokemon-img">
            <div id="pokemon-typ">
            </div>
            <div id="stat${i}">
                </div>
        </div>
        `;

        for (let j = 0; j < stats.length; j++) {
            let statName = stats[j]['stat']['name'];
            let baseStat = stats[j]['base_stat']
            console.log('static', j, statName);
            document.getElementById(`stat${i}`).innerHTML += /*html*/`
            <div>
                <table>
                    <tr>
                        <td>
                            <p id="stat-name">
                                ${statName}
                            </p>
                        </td>
                        <td>
                            <p id="about-pokemon-HP-1">
                                ${baseStat}
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
            `;
        }
    }
}


function colorPushPokedex() {
    for (let i = 0; i < allpokedexColor.length; i++) {
        const color = allpokedexColor[i]['color'];
        document.getElementById(`type-color${i}`).style.backgroundColor += `${color['name']}`;
        console.log(color['name']);
    }
}