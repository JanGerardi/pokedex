function init(){
    getData();
}

async function getData(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`
    let response = await fetch(url);
    let currentRequest = await response.json();
    renderRequest(currentRequest)
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
}

function toUppercase(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function addHashtag(id){
    return '#' + id;
}

async function getMoreData(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`
    let response = await fetch(url);
    let currentRequest = await response.json();
    renderMore(currentRequest)
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
}