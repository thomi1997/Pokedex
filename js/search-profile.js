function namesFilter() {
    const searchInput = document.getElementById('search-pokemon-value');
    const query = searchInput.value;
    const searchResults = searchPokemon(query);
    displayResults(searchResults);
}


function searchPokemon(query) {
    const searchResults = allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    return searchResults;
}


function displayResults(results) {
    const pokedexCards = document.getElementById('pokedex');
    const searchContent = document.getElementById('pokedex-search');
    const search = document.getElementById('search-pokemon-value').value;
    noResults(results);
    clonedElements();
    refreshPokedexCards(results, pokedexCards, searchContent, search);
}


function noResults(results) {
    const notFound = document.getElementById('pokedex-not-found');
    if (results.length === 0) {
        notFound.innerHTML = /*html*/`
            <div class="alert-not-found">
                <span>
                    Es wurden keine Ergebnisse gefunden !
                </span>
            </div>
            `;
        return;
    } 
    resultsFound(results, notFound);
}


function resultsFound(results, notFound) {
    if(results.length > 0) {
        notFound.innerHTML = '';
        return;
    }
}


function clonedElements() {
    const divContainers = document.querySelectorAll('.pokedex-div');
    const divNamesSet = new Set();
    divContainers.forEach(div => {
        const name = div.getAttribute('data-name');
        divNamesSet.add(name);
    });
    filterduplicatePokemon(divContainers, divNamesSet);
}


function filterduplicatePokemon(divContainers, divNamesSet) {
    const duplicateNames = Array.from(divNamesSet).filter(id => {
        return Array.from(divContainers).filter(div => div.getAttribute('data-name') === id).length > 0;
    });
    removeduplicatePokemon(duplicateNames);
}


function removeduplicatePokemon(duplicateNames) {
    duplicateNames.forEach(id => {
        const divsWithDuplicateName = document.querySelectorAll(`.pokedex-div[data-name="${id}"]`);
        divsWithDuplicateName.forEach(div => {
            div.remove();
        });
    });
}


function refreshPokedexCards(results, pokedexCards, searchContent, search) {
    pokedexCards.innerHTML = '';
    for (let i = 0; i < results.length; i++) {
        let name = results[i]['name'];
        let id = results[i]['id'];
        let Name = name.charAt(0).toUpperCase() + name.slice(1);
        let searchTypes = results[i]['types'];
        searchContent.innerHTML += htmlRenderSearchPokemon(Name, id, i);
        refreshTypes(searchTypes, i);
        inputSearchBlank(search, searchContent);
    }
}


function refreshTypes(searchTypes, i) {
    for (let j = 0; j < searchTypes.length; j++) {
        let searchType = searchTypes[j]['type']['name'];
        let Type = searchType.charAt(0).toUpperCase() + searchType.slice(1);
        const searchTypesId = document.getElementById(`pokedex-types${i}`);
        searchTypesId.innerHTML += htmlRenderPokemontypes(Type);
        colorPushPokedex();
    }
}


function inputSearchBlank(search, searchContent) {
    if (search === '') {
        searchContent.innerHTML = '';
        renderPokemonProfil(i);
        colorPushPokedex();
    }
}