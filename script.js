function init(){
    getData();
}

async function getData(){
    startLoadingscreen();
    let url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`
    let response = await fetch(url);
    let currentRequest = await response.json();
    renderRequest(currentRequest);
}

async function renderRequest(currentRequest){
    let currentObject = currentRequest.results;
    let contentContainer = document.getElementById("pokedex");
    contentContainer.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const currentPokemon = currentObject[i];
        let pokeDetailsResponse = await fetch(currentPokemon.url);
        let currentPokemonDetails = await pokeDetailsResponse.json();
        contentContainer.innerHTML += pokedexTemplate(currentPokemonDetails);
    }
    stopLoadingscreen();
}

async function getMoreData(){
    startLoadingscreen();
    let url = `https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`
    let response = await fetch(url);
    let currentRequest = await response.json();
    renderMore(currentRequest);
}

async function renderMore(currentRequest){
    let currentObject = currentRequest.results;
    let contentContainer = document.getElementById("pokedex");
    for (let i = 30; i < 60; i++) {
        const currentPokemon = currentObject[i];
        let pokeDetailsResponse = await fetch(currentPokemon.url);
        let currentPokemonDetails = await pokeDetailsResponse.json();
        contentContainer.innerHTML += pokedexTemplate(currentPokemonDetails);
    }
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    loadMoreBtn.style.display = 'none';
    stopLoadingscreen();
}

async function renderDetails(pokemonId){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(url);
    const currentRequest = await response.json();
    const contentContainer = document.getElementById("pokedexDetails");
    contentContainer.innerHTML = pokedexDetailsTemplate(currentRequest);
    document.body.style.overflow = 'hidden';
}

function startLoadingscreen(){
    const loadingscreen = document.getElementById("loadingscreen");
    loadingscreen.innerHTML = loadingscreenTemplate();
    loadingscreen.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function stopLoadingscreen(){
    const loadingscreen = document.getElementById("loadingscreen");
    loadingscreen.innerHTML = "";
    loadingscreen.style.display = "none";
    document.body.style.overflow = "auto";
}

function nextPokemon(pokemonId){
    let nextPokemonId = pokemonId + 1;
    if (nextPokemonId > 60) {
        nextPokemonId = 60;
    }
    renderDetails(nextPokemonId);
}

function previousPokemon(pokemonId){
    const previousPokemonId = pokemonId - 1;
    renderDetails(previousPokemonId);
}

function closeOverlay(){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function toUppercase(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function addHashtag(id){
    return '#' + id;
}

function showHeight(height){
    let m = height / 10;
    return m.toFixed(2) + " m";
}

function showWeight(weight){
    let kg = weight / 10;
    return kg.toFixed(2) + " kg";
}