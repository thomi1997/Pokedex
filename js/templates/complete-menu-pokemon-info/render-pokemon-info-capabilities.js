function htmlRenderPokemontypesInfo(type) {
    return /*html*/`
    <div class="pokemon-abilities-types-div">
        <div id="pokemon-abilities">
        </div>
        <div class="pokemon-types-info">
            <p>
                Typ: ${type}
            </p>
        </div>
    </div>
    `;
}


function htmlRenderPokemonAbilities(pokemonAbilitieName, pokemonAbilitieContent) {
    return /*html*/`
        <h2 style="color: white">
            ${pokemonAbilitieName}
        </h2>
        <p>
            ${pokemonAbilitieContent}
        </p>
    `;
}


function htmlRenderPokemonAbilitiesOnlyGreen(pokemonAbilitieName1, pokemonAbilitieName2, correctAbilitie1, correctAbilitie2) {
    return /*html*/`
        <h2>
            ${pokemonAbilitieName1}
        </h2>
        <p>
            ${correctAbilitie1}
        </p>
        <h2>
            ${pokemonAbilitieName2}
        </h2>
        <p>
            ${correctAbilitie2}
        </p>
    `;
}