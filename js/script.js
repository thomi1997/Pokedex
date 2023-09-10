window.addEventListener("resize", function () {
    if (window.innerWidth <= 400) {
        smallMenu();
        renderMobileSmallMenu();
    } else {
        mediumLarge();
    }
});


function smallMenu() {
    document.getElementById('poke-ball-id').classList.add('d-none');
    document.getElementById('menu-burger-id').classList.add('d-none');
}


function mediumLarge() {
    document.getElementById('small-menu-id').innerHTML = '';
    document.getElementById('poke-ball-id').classList.remove('d-none');
    document.getElementById('menu-burger-id').classList.remove('d-none');
}


function moveLeft(i) {
    if (i !== 0) {
        i--
    } else {
        i = allPokemons.length - 1;
    }
    document.getElementById('pokemon-stats').innerHTML = '';
    renderPokemonDetailProfil(i);
    pokemonAbilities = [];
    pokedexEvolutionChains = [];
    pokemonEvolutionImgIds = [];
}


function moveRight(i) {
    if (i < allPokemons.length - 1) {
        i++
    } else {
        i = 0;
    }
    document.getElementById('pokemon-stats').innerHTML = '';
    renderPokemonDetailProfil(i);
    pokemonAbilities = [];
    pokedexEvolutionChains = [];
    pokemonEvolutionImgIds = [];
}


function showPokemonDetail() {
    document.getElementById('pokemon-stats').classList.add('is-visible');
}


function closePokemonDetail() {
    pokemonAbilities = [];
    pokedexEvolutionChains = [];
    pokemonEvolutionImgIds = [];
    document.getElementById('pokemon-stats').innerHTML = '';
    document.getElementById('pokemon-stats').classList.remove('is-visible');
}


function showImpressum() {
    let impressum = document.getElementById('impressum-overlay');
    impressum.innerHTML = htmlRenderImpressum();
    closeMobileMenu();
}


function hiddenImpressum() {
    let impressum = document.getElementById('impressum-overlay');
    impressum.innerHTML = '';
}


function openMobileMenu() {
    const menuMobile = document.getElementById('create-menu-mobile');
    const animate = document.getElementById('animate-menu');
    menuMobile.classList.remove('d-none');
    animate.classList.add('open-menu');
}


function closeMobileMenu() {
    const menuMobile = document.getElementById('create-menu-mobile');
    const animate = document.getElementById('animate-menu');
    animate.classList.remove('open-menu');
    animate.classList.add('close-menu');
    setTimeout(() => {
        menuMobile.classList.add('d-none');
        animate.classList.remove('close-menu');
    }, 1000);
}