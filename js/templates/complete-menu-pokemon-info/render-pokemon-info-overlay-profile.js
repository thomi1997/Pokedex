function htmlRenderPokemonHeadProfil(name, i) {
    return /*html*/`
    <div class="pokedex-info-div">
        <div class="pokedex-info" id="type-color-info">
            <div class="info-container-head">
                <div class="info-container-text-head">
                    <div class="number-and-close-button">
                        <svg onclick="closePokemonDetail()" class="close-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path 
                                d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/>
                        </svg>
                        <div >
                            ${i + 1}.
                        </div>
                    </div>
                    <h1 class="pokemon-name">
                        ${name}
                    </h1>
                </div>
                <div class="pokemon-info-img-div">
                    <svg class="arrow-left" onclick="moveLeft(${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path 
                            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/>
                    </svg>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${i + 1}.png" class="pokemon-img-info" id="pokemon-img">
                    <svg class="arrow-right" onclick="moveRight(${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path 
                            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="pokedex-info-menu">
            <div class="info-menu-div" id="pokedex-info-menu-pos-1">
            </div>
            <div class="info-menu-div-mobile" id="pokedex-info-menu-pos-2-mobile">
            </div>
            <div class="content-box" id="stat">
            </div>
            <div class="content-box d-none" id="types-info">
            </div>
            <div class="content-box d-none" id="height-weight">
            </div>
            <div class="moves-box d-none" id="moves-none">
                <div class="moves-content-box" id="moves">
                </div>
            </div>
            <div class="content-box-evolution d-none" id="evolution">
            </div>
        </div>
    </div>
    `;
}