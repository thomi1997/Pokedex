function htmlRenderImpressum() {
    return /*html*/`
    <div class="impressum-background">
        <div class="impressum-headline">
            <div>
                <a href="./index.html">
                    <img class="impressum-imgs" src="./img/pokeball.png">
                </a>
            </div>
            <button onclick="hiddenImpressum()" class="go-back-btn">
                <svg class="menu-mobile-arrow-back-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            </button>
        </div>
        <div class="impressum-content">
            <h1>
            Impressum
            </h1>
            <h2>
                Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <p>
                Thomas Ketler
                <br />
                Hauptstra&szlig;e 71
                <br />
                56593 Pleckhausen
            </p>
            <h2>
                Kontakt
            </h2>
            <p>
                Telefon: 
                <br />
                E-Mail: thomas_ketler@web.de
            </p>
            <p>
                Quelle: 
                <a href="https://www.e-recht24.de/impressum-generator.html">
                    <br>https://www.e-recht24.de/impressum-generator.html
                </a>
            </p>
        </div>
    </div>
`;
}