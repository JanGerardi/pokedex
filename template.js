function pokedexTemplate(pokemon){
    const type1 = pokemon.types[0]?.type.name || "";
    const type2 = pokemon.types[1]?.type.name || "";
    return /*html*/`
            <div onclick="renderDetails(${pokemon.id})" class="pokedexCard ${type1}">
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

function pokedexDetailsTemplate(pokemon){
    const type1 = pokemon.types[0]?.type.name || "";
    const type2 = pokemon.types[1]?.type.name || "";
    return /*html*/`
        <div onclick="closeOverlay()" id="overlay">
            <div class="pokedexDetailsCard ${type1}">
                <div class="pokedexDetailsCardTop">
                    <h2>${toUppercase(pokemon.name)}</h2>
                    <p class="pokemonId">${addHashtag(pokemon.id)}</p>
                </div>
                <div class="pokedexDetailsCardBottom">
                    <div>
                        <p class="show_${type1}">${toUppercase(type1)}</p>
                        ${type2 ? `<p class="show_${type2}">${toUppercase(type2)}</p>` : ""}
                    </div>
                    <img src="${pokemon.sprites.front_default}">
                </div>
                <div class="pokedexDetailsCardInfo">
                    <div class="detailsMenu">
                        <a href=""><b>About</b></a>
                        <a href=""><b>Base Stats</b></a>
                    </div>
                    <div>
                        <table class="about">
                            <tr>
                                <td>Height</td>
                                <td>${pokemon.height}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>${pokemon.weight}</td>
                            </tr>
                        </table>
                        <table calss="baseStats">
                            <tr>
                                <td>HP</td>
                                <td>${pokemon.stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>${pokemon.stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>${pokemon.stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Sp.Atk</td>
                                <td>${pokemon.stats[3].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Sp.Def</td>
                                <td>${pokemon.stats[4].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>${pokemon.stats[5].base_stat}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="btn_container">
                    <button class="btn_left">&#11164;</button>
                    <button class="btn_right">&#11166;</button>
                </div>
            </div>
        </div>`
}