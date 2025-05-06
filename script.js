function init(){
    getData();
}

async function getData(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`
    let response = await fetch(url);
    let currentRequest = await response.json();
    renderRequest(currentRequest)
}

async function renderRequest(currentRequest){
    let currentObject = currentRequest.results;
    let contentContainer = document.getElementById("pokedex");
    contentContainer.innerHTML = "";
    for (let i = 0; i < currentObject.length; i++) {
        const currentPokemon = currentObject[i];
        let pokeDetailsResponse = await fetch(currentPokemon.url);
        let currentPokemonDetails = await pokeDetailsResponse.json();
        contentContainer.innerHTML += pokedexTemplate(currentPokemonDetails);
    }
}