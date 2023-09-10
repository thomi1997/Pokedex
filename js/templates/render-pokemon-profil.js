function htmlRenderPokemonProfil(Name, i) {
    return /*html*/`
    <div onclick="renderPokemonDetailProfil(${i})" class="pokedex-div">
        <img class="pikachu-img" src="img/pikachu.svg" alt="pikachu">
        <img class="pokemon-logo-svg" src="img/pokemon-text.svg" alt="pokemon">
            <div class="head-img-name-box" id="type-color${i}">
                <div class="">
                    <div class="pokedex-name-number">
                        <p class="number-pokemon">
                            ${1 + i}.
                        </p>
                        <h1>
                            ${Name}
                        </h1>
                    </div>
                    <div class="pokedex-types-div" id="pokedex-types${i}">
                </div>
                <div id="pokedex-img-div">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${i + 1}.png" class="pokemon-img" id="pokedex-img">
                </div>
            </div>
            <img class="pokeball-origin" src="img/pokeball-origin.svg" alt="pokeball">
        </div>
    </div>
    `;
}


function htmlRenderPokemontypes(type, j) {
    return /*html*/`
    <span class="pokedex-types text-align-center" style="width: 50%;">
        ${j, type}
    </span>
    `;
}