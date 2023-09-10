function htmlRenderMenu() {
    return /*html*/`
    <div class="menu">
        <div id="small-menu-id">
        </div>
        <div class="align-objects">
            <div id="poke-ball-id" class="pokeball-div">
                <img class="headline-img" src="./img/pokeball.png">
            </div>
            <input class="search-pokemon-input" id="search-pokemon-value" type="text" placeholder="Suche Pokemon..." onkeyup="namesFilter()">
            <div id="change-number-id" class="change-number-div">
            </div>
            <div class="link-impressum-div">
                <a class="link-impressum" onclick="showImpressum()">
                    Impressum
                </a>
            </div>
            <div onclick="openMobileMenu()" id="menu-burger-id" class="menu-burger-div">
                <svg class="menu-burger-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>
        </div>
    </div>
`;
}


function htmlRenderMenuMobile() {
    return /*html*/`
        <div id="animate-menu" class="menu-mobile">
            <div onclick="closeMobileMenu()">
                <svg class="menu-mobile-arrow-back-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            </div>
            <div class="align-objects-mobile">
                <img class="headline-img-mobile" src="./img/pokeball.png">
                <div id="change-number-id-mobile" class="change-number-div-mobile">
                </div>
                <div class="link-impressum-div-mobile">
                    <a class="link-impressum" onclick="showImpressum()">
                        Impressum
                    </a>
                </div>
            </div>
        </div>
    `;
}


function htmlRenderSmallMenu() {
    return /*html*/`
        <div class="small-menu">
            <img class="headline-img" src="./img/pokeball.png">
            <div onclick="openMobileMenu()" class="">
                <svg class="menu-burger-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>
        </div>
    `;
}