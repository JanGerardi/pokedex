function pokedexTemplate(pokemon){
    const type1 = pokemon.types[0]?.type.name || "";
    const type2 = pokemon.types[1]?.type.name || "";
    return /*html*/`
            <div class="pokedexCard">
                <p>${pokemon.id}</p>
                <h3>${pokemon.name}</h3>
                <div class="pokedexCardBottom">
                    <p>${type1}</p>
                    <p>${type2}</p>
                    <img src="${pokemon.sprites.front_default}">
                </div>
            </div>`
}