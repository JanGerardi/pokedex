const currentPokemons = [];

function init(){
    getData();
}

async function getData(){
    startLoadingscreen();
    const url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`
    const response = await fetch(url);
    const currentRequest = await response.json();
    renderRequest(currentRequest);
}

async function renderRequest(currentRequest){
    const currentObject = currentRequest.results;
    const contentContainer = document.getElementById("pokedex");
    contentContainer.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const currentPokemon = currentObject[i];
        const pokeDetailsResponse = await fetch(currentPokemon.url);
        const currentPokemonDetails = await pokeDetailsResponse.json();
        currentPokemons.push(currentPokemonDetails);
        contentContainer.innerHTML += pokedexTemplate(currentPokemonDetails);
    }
    stopLoadingscreen();
}

async function getMoreData(){
    startLoadingscreen();
    const url = `https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`
    const response = await fetch(url);
    const currentRequest = await response.json();
    renderMore(currentRequest);
}

async function renderMore(currentRequest){
    const currentObject = currentRequest.results;
    const contentContainer = document.getElementById("pokedex");
    for (let i = 30; i < 60; i++) {
        const currentPokemon = currentObject[i];
        const pokeDetailsResponse = await fetch(currentPokemon.url);
        const currentPokemonDetails = await pokeDetailsResponse.json();
        currentPokemons.push(currentPokemonDetails);
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
    document.body.style.overflow = "hidden";
}

function searchPokemon(){
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const contentContainer = document.getElementById("pokedex");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    contentContainer.innerHTML = "";
    if (searchInput.length >= 3) {
        const filteredPokemons = currentPokemons.filter(pokemon => pokemon.name.startsWith(searchInput));
        contentContainer.innerHTML = filteredPokemons.map(pokemon => pokedexTemplate(pokemon)).join('');
        loadMoreBtn.style.display = "none";
    } else {
        contentContainer.innerHTML = currentPokemons.map(pokemon => pokedexTemplate(pokemon)).join('');
        hideBtn(currentPokemons);
    }
}

function searchHint() {
    const hint = document.getElementById("searchHint");
    const input = document.getElementById("searchInput");
    if (input.value.length < 3) {
        hint.style.visibility = "visible";
    } else {
        hint.style.visibility = "hidden";
    }
}

function hideHint(){
    const hint = document.getElementById("searchHint");
    hint.style.visibility = "hidden";
}

function startLoadingscreen(){
    const loadingscreen = document.getElementById("loadingscreen");
    const inputField = document.querySelector("header input");
    loadingscreen.innerHTML = loadingscreenTemplate();
    loadingscreen.style.display = "flex";
    document.body.style.overflow = "hidden";
    inputField.disabled = true;
}

function stopLoadingscreen(){
    const loadingscreen = document.getElementById("loadingscreen");
    const inputField = document.querySelector("header input");
    loadingscreen.innerHTML = "";
    loadingscreen.style.display = "none";
    document.body.style.overflow = "auto";
    inputField.disabled = false;
}

function nextPokemon(pokemonId){
    let nextPokemonId = pokemonId + 1;
    if (nextPokemonId > 60) {
        nextPokemonId = 1;
    }
    renderDetails(nextPokemonId);
}

function previousPokemon(pokemonId){
    let previousPokemonId = pokemonId - 1;
    if (previousPokemonId < 1) {
        previousPokemonId = 60;
    }
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
    const m = height / 10;
    return m.toFixed(2) + " m";
}

function showWeight(weight){
    const kg = weight / 10;
    return kg.toFixed(2) + " kg";
}

function hideBtn(currentPokemons){
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    
        if (currentPokemons.length <= 30) {
            loadMoreBtn.style.display = "block";
        } else {
            loadMoreBtn.style.display = "none";
        }
}