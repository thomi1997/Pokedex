let infoMenuIsOpen = false;


async function renderPokemonDetailProfil(i) {
    let abilities = allPokemons[i]['abilities'];
    let evolutionChain = allpokedexColor[i]['evolution_chain']['url'];
    await loadPokemonAbilities(abilities);
    await loadEvolutionChain(evolutionChain);
    ShowAndCreateAllPokemonDetails(i);
}


function ShowAndCreateAllPokemonDetails(i) {
    let stats = allPokemons[i]['stats'];
    let name = allPokemons[i]['name'];
    let types = allPokemons[i]['types'];
    let moves = allPokemons[i]['moves'];
    createFirstLetterNameLarge(name, i);
    createVariablePokemonData(i);
    createStatsBar(stats, types);
    createAllMoves(moves);
    createAllEvolutions();
    colorPushPokedexInfo(i); //load-pokemon.js
    showPokemonDetail(); //script.js
    queryFilterTheFirstThree(i);
}


function createFirstLetterNameLarge(name, i) {
    let pokemonStatsBox = document.getElementById('pokemon-stats');
    let Name = name.charAt(0).toUpperCase() + name.slice(1);
    pokemonStatsBox.innerHTML += htmlRenderPokemonHeadProfil(Name, i);
}


function createVariablePokemonData(i) {
    let heigthAndWeightBox = document.getElementById('height-weight');
    let height = allPokemons[i]['height'];
    let weight = allPokemons[i]['weight'];
    let baseHappiness = allpokedexColor[i]['base_happiness'];
    let captureRate = allpokedexColor[i]['capture_rate'];
    let habitat = allpokedexColor[i]['habitat']['name'];
    let growthRate = allpokedexColor[i]['growth_rate']['name'];
    let shape = allpokedexColor[i]['shape']['name'];
    let eggGroupes = allpokedexColor[i]['egg_groups'];
    heigthAndWeightBox.innerHTML += htmlHeightAndWeight(height, weight, baseHappiness, captureRate, habitat, growthRate, shape, eggGroupes);
    renderEggGroupes(eggGroupes);
}


function renderEggGroupes(eggGroupes) {
    for (let i = 0; i < eggGroupes.length; i++) {
        let eggGroupe = eggGroupes[i];
        let eggName = eggGroupe['name'];
        document.getElementById('egg-id').innerHTML += /*html*/`
        <span>
            ${i + 1}. ${eggName}<br>
        </span>
    `;
    }
}


function createStatsBar(stats, types) {
    for (let j = 0; j < stats.length; j++) {
        let statName = stats[j]['stat']['name'];
        let baseStat = stats[j]['base_stat'];
        let nr = stats[j]['base_stat'];
        let nrBar = nr / 1.25;
        let pokemonDetailsBox = document.getElementById('stat');
        createFirstLetterDetails(statName, pokemonDetailsBox, baseStat, nrBar);
    }
    createDetailsTypes(types);
}


function createFirstLetterDetails(statName, pokemonDetailsBox, baseStat, nrBar) {
    let Name = statName.charAt(0).toUpperCase() + statName.slice(1);
    pokemonDetailsBox.innerHTML += htmlRenderPokemonDetailProfil(Name, baseStat, nrBar, statName);
    createPokedexInfoMenu();
}


function createPokedexInfoMenu() {
    let menuButtonPos1 = document.getElementById('pokedex-info-menu-pos-1');
    let menuButtonPos2Mobile = document.getElementById('pokedex-info-menu-pos-2-mobile');
    menuButtonPos1.innerHTML = '';
    menuButtonPos2Mobile.innerHTML = '';
    menuButtonPos1.innerHTML = htmlRenderPokedexInfoMenu();
    menuButtonPos2Mobile.innerHTML = htmlRenderPokedexInfoMenuMobile();
}


function createDetailsTypes(types) {
    for (let k = 0; k < types.length; k++) {
        let type = types[k]['type']['name'];
        let Type = type.charAt(0).toUpperCase() + type.slice(1);
        document.getElementById('types-info').innerHTML += htmlRenderPokemontypesInfo(Type);
    }
}


function createAllMoves(moves) {
    let moveContainer = document.getElementById('moves');
    for (let i = 0; i < moves.length; i++) {
        let moveName = moves[i]['move']['name'];
        moveContainer.innerHTML += /*html*/`
            <p class="move">
                ${moveName}
            </p>
        `;
    }
}


function createAllEvolutions() {
    let evolutionContainer = document.getElementById('evolution');
    let species_1Url = pokedexEvolutionChains[0]['chain']['species']['url'];
    let species_2Url = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['species']['url'];
    let species_1Name = pokedexEvolutionChains[0]['chain']['species']['name'];
    let species_2Name = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['species']['name'];
    let minLevel_1 = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['evolution_details'][0]['min_level'];
    let existsSpecies_3 = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['evolves_to'][0];
    queryExistsSpecies3(evolutionContainer, species_1Url, species_2Url, species_1Name, species_2Name, minLevel_1, existsSpecies_3);
}


async function queryExistsSpecies3(evolutionContainer, species_1Url, species_2Url, species_1Name, species_2Name, minLevel_1, existsSpecies_3) {
    if (existsSpecies_3 === undefined) {
        await loadRelatedSpecies(species_1Url, species_2Url);
        evolutionContainer.innerHTML += htmlRenderPokemonEvolutionWithoutSpecies3(species_1Name, species_2Name, minLevel_1);
    } else {
        let species_3Url = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['evolves_to'][0]['species']['url'];
        await loadAllRelatedSpecies(species_1Url, species_2Url, species_3Url);
        RenderPokemonEvolution(evolutionContainer, species_1Name, species_2Name, minLevel_1, species_1Url, species_2Url);
    }
}


function RenderPokemonEvolution(evolutionContainer, species_1Name, species_2Name, minLevel_1) {
    let species_3Name = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['evolves_to'][0]['species']['name'];
    let minLevel_2 = pokedexEvolutionChains[0]['chain']['evolves_to'][0]['evolves_to'][0]['evolution_details'][0]['min_level'];
    evolutionContainer.innerHTML += htmlRenderPokemonEvolution(species_1Name, species_2Name, species_3Name, minLevel_1, minLevel_2);
}


function queryFilterTheFirstThree(i) {
    if (allPokemons[i]['id'] < 4) {
        createPokemonAbilitiesOnlyGreen();
    } else {
        renderPokemonAbilities();
    }
}


function createPokemonAbilitiesOnlyGreen() {
    for (let i = 1; i < pokemonAbilities.length; i++) {
        createAllAbilitiesVariable();
    }
}


function createAllAbilitiesVariable() {
    let pokemonAbilitieName1 = pokemonAbilities[0]['name'];
    let pokemonAbilitieName2 = pokemonAbilities[1]['name'];
    let pokemonAbilitie1 = pokemonAbilities[0]['effect_entries'];
    let correctAbilitie1 = pokemonAbilitie1[0]['effect'];
    let pokemonAbilitie2 = pokemonAbilities[1]['effect_entries'];
    let correctAbilitie2 = pokemonAbilitie2[1]['effect'];
    renderPokemonAbilitiesOnlyGreen(pokemonAbilitieName1, pokemonAbilitieName2, correctAbilitie1, correctAbilitie2);
}


function renderPokemonAbilitiesOnlyGreen(pokemonAbilitieName1, pokemonAbilitieName2, correctAbilitie1, correctAbilitie2) {
    let abilitiesContainer = document.getElementById('pokemon-abilities');
    abilitiesContainer.innerHTML += htmlRenderPokemonAbilitiesOnlyGreen(pokemonAbilitieName1, pokemonAbilitieName2, correctAbilitie1, correctAbilitie2);
}


function renderPokemonAbilities() {
    for (let i = 0; i < pokemonAbilities.length; i++) {
        let pokemonAbilitieName = pokemonAbilities[i]['name'];
        let allpokemonAbilitieContent = pokemonAbilities[i]['effect_entries'];
        let pokemonAbilitieContent = allpokemonAbilitieContent[1]['effect'];
        let abilitiesContainer = document.getElementById('pokemon-abilities');
        abilitiesContainer.innerHTML += htmlRenderPokemonAbilities(pokemonAbilitieName, pokemonAbilitieContent);
    }
}


function showInfoMenuMobile() {
    if (infoMenuIsOpen == true) {
        infoMenuIsOpen = false;
        document.getElementById('caret-down-svg-id').style.rotate = '180deg';
        document.getElementById('info-menu-mobile-open').classList.add('d-none');
    } else if (infoMenuIsOpen == false) {
        infoMenuIsOpen = true;
        document.getElementById('caret-down-svg-id').style.rotate = '0deg';
        document.getElementById('info-menu-mobile-open').classList.remove('d-none');
    }
}


//five onclicks()
function showStat() {
    document.getElementById('base-stat-button').classList.add('colorTurquoise');
    document.getElementById('capabilities-button').classList.remove('colorTurquoise');
    document.getElementById('moves-button').classList.remove('colorTurquoise');
    document.getElementById('evolution-button').classList.remove('colorTurquoise');
    document.getElementById('about-button').classList.remove('colorTurquoise');

    document.getElementById('stat').classList.remove('d-none');
    document.getElementById('types-info').classList.add('d-none');
    document.getElementById('height-weight').classList.add('d-none');
    document.getElementById('moves-none').classList.add('d-none');
    document.getElementById('evolution').classList.add('d-none');
}


function showCapabilities() {
    document.getElementById('capabilities-button').classList.add('colorTurquoise');
    document.getElementById('moves-button').classList.remove('colorTurquoise');
    document.getElementById('evolution-button').classList.remove('colorTurquoise');
    document.getElementById('about-button').classList.remove('colorTurquoise');
    document.getElementById('base-stat-button').classList.remove('colorTurquoise');

    document.getElementById('types-info').classList.remove('d-none');
    document.getElementById('stat').classList.add('d-none');
    document.getElementById('height-weight').classList.add('d-none');
    document.getElementById('moves-none').classList.add('d-none');
    document.getElementById('evolution').classList.add('d-none');
}


function showMoves() {
    document.getElementById('moves-button').classList.add('colorTurquoise');
    document.getElementById('evolution-button').classList.remove('colorTurquoise');
    document.getElementById('about-button').classList.remove('colorTurquoise');
    document.getElementById('capabilities-button').classList.remove('colorTurquoise');
    document.getElementById('base-stat-button').classList.remove('colorTurquoise');

    document.getElementById('moves-none').classList.remove('d-none');
    document.getElementById('height-weight').classList.add('d-none');
    document.getElementById('stat').classList.add('d-none');
    document.getElementById('types-info').classList.add('d-none');
    document.getElementById('evolution').classList.add('d-none');
}


function showEvolution() {
    document.getElementById('evolution-button').classList.add('colorTurquoise');
    document.getElementById('about-button').classList.remove('colorTurquoise');
    document.getElementById('moves-button').classList.remove('colorTurquoise');
    document.getElementById('capabilities-button').classList.remove('colorTurquoise');
    document.getElementById('base-stat-button').classList.remove('colorTurquoise');

    document.getElementById('evolution').classList.remove('d-none');
    document.getElementById('height-weight').classList.add('d-none');
    document.getElementById('stat').classList.add('d-none');
    document.getElementById('types-info').classList.add('d-none');
    document.getElementById('moves-none').classList.add('d-none');
}


function showAbout() {
    document.getElementById('about-button').classList.add('colorTurquoise');
    document.getElementById('evolution-button').classList.remove('colorTurquoise');
    document.getElementById('moves-button').classList.remove('colorTurquoise');
    document.getElementById('capabilities-button').classList.remove('colorTurquoise');
    document.getElementById('base-stat-button').classList.remove('colorTurquoise');

    document.getElementById('height-weight').classList.remove('d-none');
    document.getElementById('stat').classList.add('d-none');
    document.getElementById('types-info').classList.add('d-none');
    document.getElementById('moves-none').classList.add('d-none');
    document.getElementById('evolution').classList.add('d-none');
}