function changePokedexNumberMobil() {
    closeMobileMenu();
    setTimeout(() => {
        changePokedexNumber();
    }, 800);
}


function changePokedexNumber() {
    let changeNumberAlert = document.getElementById('change-number-alert');
    let alertText = document.getElementById('alert-text');
    let currentNumberValue = document.getElementById('current-number').value;
    let buttonDisabled = document.getElementById('refresh-button');
    changeNumberProcess(changeNumberAlert, alertText, currentNumberValue, buttonDisabled);
}


function changeNumberProcess(changeNumberAlert, alertText, currentNumberValue, buttonDisabled) {
    if (currentNumberValue < 1) {
        numberFalse(buttonDisabled, alertText, changeNumberAlert);
    } else if (currentNumberValue < 101) {
        changeNumber(currentNumberValue);
    } else if (currentNumberValue > 100) {
        numberFalse(buttonDisabled, alertText, changeNumberAlert);
    }
}


function numberFalse(buttonDisabled, alertText, changeNumberAlert) {
    buttonDisabled.disabled = true;
    pushTextContent(alertText);
    showAlert(changeNumberAlert);
    hideAlert(changeNumberAlert, buttonDisabled);
}


function changeNumber(currentNumberValue) {
    numberPokemons = parseInt(currentNumberValue) + 1;
    allPokemons = [];
    allpokedexColor = [];
    loadPokemon();
}


function pushTextContent(alertText) {
    alertText.textContent = 'Gebe bitte eine Zahl zwischen 1 und 100 ein !';
}


function showAlert(changeNumberAlert) {
    changeNumberAlert.classList.remove('d-none');
}


function hideAlert(changeNumberAlert, buttonDisabled) {
    setTimeout(() => {
        changeNumberAlert.classList.add('d-none');
        buttonDisabled.disabled = false;
    }, 5000);
}


function countOneUp() {
    let upId = document.getElementById("current-number");
    let up = parseInt(upId.value);
    let resultUp = up + 1;
    upId.value = resultUp;
    clickChangeUpButton();
}


function countOneDown() {
    let downId = document.getElementById("current-number");
    let down = parseInt(downId.value);
    let resultDown = down - 1;
    downId.value = resultDown;
    clickChangeDownButton();
}


function clickChangeUpButton() {
    const buttonUpSvg = document.getElementById('up-button');
    const svgUp = document.getElementById('up-svg');
    svgUp.setAttribute('fill', 'white');
    buttonUpSvg.classList.add('click-up-down-button');
    setTimeout(() => {
        svgUp.setAttribute('fill', 'black');
        buttonUpSvg.classList.remove('click-up-down-button');
    }, 300);
}


function clickChangeDownButton() {
    const buttonDownSvg = document.getElementById('down-button');
    const svgDown = document.getElementById('down-svg');
    svgDown.setAttribute('fill', 'white');
    buttonDownSvg.classList.add('click-up-down-button');
    setTimeout(() => {
        svgDown.setAttribute('fill', 'black');
        buttonDownSvg.classList.remove('click-up-down-button');
    }, 300);
}