function htmlRenderSearchPokemon(Name, id, i) {
    return /*html*/`
    <div onclick="renderPokemonDetailProfil(${id - 1})" data-name="${id}" class="pokedex-div">
        <img class="pikachu-img" src="img/pikachu.svg" alt="pikachu">
        <img class="pokemon-logo-svg" src="img/pokemon-text.svg" alt="pokemon">
            <div class="head-img-name-box" id="type-color${id - 1}">
                <div class="">
                    <div class="pokedex-name-number">
                        <span class="number-pokemon">
                            ${id}.
                        </span>
                        <h1>
                            ${Name}
                        </h1>
                    </div>
                    <div class="pokedex-types-div" id="pokedex-types${i}">
                </div>
                <div id="pokedex-img-div">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png" class="pokemon-img" id="pokedex-img">
                </div>
            </div>
            <img class="pokeball-origin" src="img/pokeball-origin.svg" alt="pokeball">
        </div>
    </div>
    `;
}