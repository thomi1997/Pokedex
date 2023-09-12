let allPokemons = [];
let pokemonAbilities = [];
let pokedexEvolutionChains = [];
let allpokedexColor = [];
let numberPokemons = [11];

let pokemonEvolutionImgIds = [];


function showOverlay() {
    document.getElementById("overlay").style.display = "flex";
}


function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}


function showOverlayPokemonInfo() {
    document.getElementById("loader").classList.remove('d-none');
}


function hideOverlayPokemonInfo() {
    document.getElementById("loader").classList.add('d-none');
}


async function loadPokemon() {
    showOverlay();
    for (let i = 1; i < numberPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemons = await response.json();
        allPokemons.push(currentPokemons);
        const progressPercentage = (i / (numberPokemons - 1)) * 100;
        updateLoadingBar(progressPercentage);
    }
    renderMenu();
    loadPokemonTypeNumber();
    renderPokemonProfil(i);
}


async function loadPokemonTypeNumber() {
    for (i = 1; i < numberPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
        let response = await fetch(url);
        let pokedexColorAsJson = await response.json();
        allpokedexColor.push(pokedexColorAsJson);
        const progressPercentage = (i / (numberPokemons - 1)) * 100;
        updateLoadingBar(progressPercentage);
    }
    colorPushPokedex();
    hideOverlay();
}


async function loadPokemonAbilities(abilities) {
    showOverlayPokemonInfo();
    for (let i = 0; i < abilities.length; i++) {
        let ability = abilities[i]['ability'];
        let abilityUrl = ability['url'];
        let url = `${abilityUrl}`;
        let response = await fetch(url);
        let pokedexAbilities = await response.json();
        pokemonAbilities.push(pokedexAbilities);
    }
}


async function loadEvolutionChain(evolutionChain) {
    let url = `${evolutionChain}`;
    let response = await fetch(url);
    let pokedexEvolutionChain = await response.json();
    pokedexEvolutionChains.push(pokedexEvolutionChain);
    hideOverlayPokemonInfo();
}


async function loadAllRelatedSpecies(species_1Url, species_2Url, species_3Url) {
    let responseId1 = await fetch(species_1Url);
    let responseId2 = await fetch(species_2Url);
    let responseId3 = await fetch(species_3Url);
    let pokemonEvolutionImgId_1 = await responseId1.json();
    let pokemonEvolutionImgId_2 = await responseId2.json();
    let pokemonEvolutionImgId_3 = await responseId3.json();
    let evolutionImgId_1 = pokemonEvolutionImgId_1['id'];
    let evolutionImgId_2 = pokemonEvolutionImgId_2['id'];
    let evolutionImgId_3 = pokemonEvolutionImgId_3['id'];
    pokemonEvolutionImgIds.push(evolutionImgId_1, evolutionImgId_2, evolutionImgId_3);
}


async function loadRelatedSpecies(species_1Url, species_2Url) {
    let responseId1 = await fetch(species_1Url);
    let responseId2 = await fetch(species_2Url);
    let pokemonEvolutionImgId_1 = await responseId1.json();
    let pokemonEvolutionImgId_2 = await responseId2.json();
    let evolutionImgId_1 = pokemonEvolutionImgId_1['id'];
    let evolutionImgId_2 = pokemonEvolutionImgId_2['id'];
    pokemonEvolutionImgIds.push(evolutionImgId_1, evolutionImgId_2);
}


function colorPushPokedex() {
    for (let i = 0; i < allpokedexColor.length; i++) {
        const color = allpokedexColor[i]['color']['name'];
        const typeColorId = document.getElementById(`type-color${i}`);
        queryColorType(color, typeColorId);
    }
}


function queryColorType(color, typeColorId) {
    if (typeColorId !== null) {
        if (color == 'green') {
            typeColorId.style.background += `${green}`;
        } else if (color == 'red') {
            typeColorId.style.background += `${red}`;
        } else if (color == 'blue') {
            typeColorId.style.background += `${blue}`;
        } else if (color == 'white') {
            typeColorId.style.background += `${white}`;
        } else if (color == 'yellow') {
            typeColorId.style.background += `${yellow}`;
        } else if (color == 'brown') {
            typeColorId.style.background += `${brown}`;
        } else if (color == 'purple') {
            typeColorId.style.background += `${purple}`;
        } else if (color == 'pink') {
            typeColorId.style.background += `${pink}`;
        } else if (color == 'gray') {
            typeColorId.style.background += `${gray}`;
        } else if (color == 'black') {
            typeColorId.style.background += `${black}`;
        }
    }
}


function colorPushPokedexInfo(i) {
    color = allpokedexColor[i]['color']['name'];
    const typeColorInfo = document.getElementById(`type-color-info`);
    queryColorTypeInfo(typeColorInfo);
}


function queryColorTypeInfo(typeColorInfo) {
    if (color == 'green') {
        typeColorInfo.style.background += `${green}`;
    } else if (color == 'red') {
        typeColorInfo.style.background += `${red}`;
    } else if (color == 'blue') {
        typeColorInfo.style.background += `${blue}`;
    } else if (color == 'white') {
        typeColorInfo.style.background += `${white}`;
    } else if (color == 'yellow') {
        typeColorInfo.style.background += `${yellow}`;
    } else if (color == 'brown') {
        typeColorInfo.style.background += `${brown}`;
    } else if (color == 'purple') {
        typeColorInfo.style.background += `${purple}`;
    } else if (color == 'pink') {
        typeColorInfo.style.background += `${pink}`;
    } else if (color == 'gray') {
        typeColorInfo.style.background += `${gray}`;
    } else if (color == 'black') {
        typeColorInfo.style.background += `${black}`;
    }
}


function updateLoadingBar(percentage) {
    const loadingBar = document.getElementById("loading-bar");
    const loadingPercentage = document.getElementById("loading-percentage");
    loadingBar.style.width = `${percentage}%`;
    loadingPercentage.textContent = `${Math.round(percentage)} %`;
}