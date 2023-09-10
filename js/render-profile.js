window.addEventListener("resize", function() {
    if (window.innerWidth <= 1024) {
        document.getElementById('change-number-id').innerHTML = '';
        renderChangeControlMobile();
    } else {
        renderChangeControl();
    }
  });


function renderMenu() {
    let menu = document.getElementById('create-menu');
    menu.innerHTML = htmlRenderMenu();
    renderChangeControl();
    renderMobileMenu();
    renderChangeControlMobile();
    renderMobileSmallMenu();
}


function renderMobileMenu() {
    let menuMobile = document.getElementById('create-menu-mobile');
    menuMobile.innerHTML = htmlRenderMenuMobile();
    menuMobile.classList.add('d-none');
}


function renderChangeControl() {
    let changeNumberDiv = document.getElementById('change-number-id');
    changeNumberDiv.innerHTML = htmlRenderChangeNumberControl();
}


function renderChangeControlMobile() {
    let changeNumberDivMobile = document.getElementById('change-number-id-mobile');
    if (window.innerWidth <= 1024) {
        changeNumberDivMobile.innerHTML = htmlRenderChangeNumberControlMobile();
        document.getElementById('change-number-id').innerHTML = '';
    }
}


function renderMobileSmallMenu() {
    let smallMenu = document.getElementById('small-menu-id');
    if (window.innerWidth <= 400) {
        smallMenu.innerHTML = htmlRenderSmallMenu();
        document.getElementById('poke-ball-id').classList.add('d-none');
        document.getElementById('menu-burger-id').classList.add('d-none');
    }
}


function renderPokemonProfil(i) {
    let pokedexBox = document.getElementById('pokedex');
    pokedexBox.innerHTML = '';
    for (let i = 0; i < allPokemons.length; i++) {
        let name = allPokemons[i]['name'];
        createProfiles(pokedexBox, name, i);
    }
}


function createProfiles(pokedexBox, name, i) {
    createFirstLetterProfile(name, pokedexBox, i);
    renderTypes(i);
}


function createFirstLetterProfile(name, pokedexBox, i) {
    let Name = name.charAt(0).toUpperCase() + name.slice(1);
    pokedexBox.innerHTML += htmlRenderPokemonProfil(Name, i);
}


function renderTypes(i) {
    let types = allPokemons[i]['types'];
    for (let j = 0; j < types.length; j++) {
        let type = types[j]['type']['name'];
        createTypes(type, i);
    }
}


function createTypes(type, i) {
    let pokemonTypesBox = document.getElementById(`pokedex-types${i}`);
    createFirstLetterTypes(type, pokemonTypesBox, i);
}


function createFirstLetterTypes(type, pokemonTypesBox, i) {
    let Name = type.charAt(0).toUpperCase() + type.slice(1);
    pokemonTypesBox.innerHTML += htmlRenderPokemontypes(Name, i);
}