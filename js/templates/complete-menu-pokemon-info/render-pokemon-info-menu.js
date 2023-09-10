function htmlRenderPokedexInfoMenu() {
    return /*html*/`
        <div class="info-menu">
            <button onclick="showStat()" class="info-menu-btn" id="base-stat-button" style="border-top-left-radius: 40px;">
                Base Stats
            </button>
            <button onclick="showCapabilities()" id="capabilities-button" class="info-menu-btn">
                Capabilities
            </button>
            <button onclick="showMoves()" id="moves-button" class="info-menu-btn">
                Moves
            </button>
            <button onclick="showEvolution()" id="evolution-button" class="info-menu-btn">
                Evolution
            </button>
            <button onclick="showAbout()" id="about-button" class="info-menu-btn border-right-none" style="border-top-right-radius: 40px;">
                About
            </button>
        </div>
    `;
}


function htmlRenderPokedexInfoMenuMobile() {
    return /*html*/`
        <svg onclick="showInfoMenuMobile()" id="caret-down-svg-id" class="caret-down-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path 
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
        </svg>
        <div class="info-menu-mobile d-none" id="info-menu-mobile-open">
            <button onclick="showStat()" id="base-stat-button" class="info-menu-btn-mobile">
                Base Stats
            </button>
            <button onclick="showCapabilities()" id="capabilities-button" class="info-menu-btn-mobile">
                Capabilities
            </button>
            <button onclick="showMoves()" id="moves-button" class="info-menu-btn-mobile">
                Moves
            </button>
            <button onclick="showEvolution()" id="evolution-button" class="info-menu-btn-mobile">
                Evolution
            </button>
            <button onclick="showAbout()" id="about-button" class="info-menu-btn-mobile">
                About
            </button>
        </div>
    `;
}