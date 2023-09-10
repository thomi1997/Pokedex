function htmlRenderPokemonEvolution(species_1Name, species_2Name, species_3Name, minLevel_1, minLevel_2) {
    return /*html*/`
        <div>
            <img class="pokemon-img-info-evolution" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonEvolutionImgIds[0]}.png" alt="">
            <p>
                ${species_1Name}
            </p>
        </div>
        <div class="min-level-div">
            <p>
                min Level ${minLevel_1}
            </p>
            <svg class="arrow-right-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
            </svg>
        </div>
        <div>
            <img class="pokemon-img-info-evolution" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonEvolutionImgIds[1]}.png" alt="">
            <p>
                ${species_2Name}
            </p>
        </div>
        <div class="min-level-div">
            <p>
                min Level ${minLevel_2}
            </p>
            <svg class="arrow-right-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
            </svg>
        </div>
        <div id="species3">
            <img class="pokemon-img-info-evolution" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonEvolutionImgIds[2]}.png" alt="">
            <p>
                ${species_3Name}
            </p>
        </div>
    `;
}


function htmlRenderPokemonEvolutionWithoutSpecies3(species_1Name, species_2Name, minLevel_1) {
    return /*html*/`
        <div>
            <img class="pokemon-img-info-evolution" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonEvolutionImgIds[0]}.png" alt="">
            <p>
                ${species_1Name}
            </p>
        </div>
        <div class="min-level-div">
            <p>
                min Level ${minLevel_1}
            </p>
            <svg class="arrow-right-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
            </svg>
        </div>
        <div>
            <img class="pokemon-img-info-evolution" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonEvolutionImgIds[1]}.png" alt="">
            <p>
                ${species_2Name}
            </p>
        </div>
    `;
}