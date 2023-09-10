function htmlRenderPokemonDetailProfil(statName, baseStat, nrBar, id) {
    return  /*html*/`
    <div id="${id}" class="stats">
            <p style="color: rgb(255, 255, 255);">
                ${statName}
            </p>
        <div class="progress-bar-background">
            <div class="progress-bar" style="width:${nrBar}%">
                ${baseStat} %
            </div>
        </div>
    </div>
    `;
}