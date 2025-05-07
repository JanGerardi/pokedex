function pokedexTemplate(pokemon){
    const type1 = pokemon.types[0]?.type.name || "";
    const type2 = pokemon.types[1]?.type.name || "";
    return /*html*/`
            <div class="pokedexCard ${type1}">
                <div class="pokedexCardTop">
                    <h3>${toUppercase(pokemon.name)}</h3>
                    <p class="pokemonId">${addHashtag(pokemon.id)}</p>
                </div>
                <div class="pokedexCardBottom">
                    <div>
                        <p class="show_${type1}">${toUppercase(type1)}</p>
                        ${type2 ? `<p class="show_${type2}">${toUppercase(type2)}</p>` : ""}
                    </div>
                    <img src="${pokemon.sprites.front_default}">
                </div>
            </div>`
}