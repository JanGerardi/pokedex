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
            <div onclick="event.stopPropagation()" class="pokedexDetailsCard ${type1}">
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
                    <div class="details">
                        <b>Details</b>
                    </div>
                    <div>
                        <table class="about">
                            <tr>
                                <td>Height</td>
                                <td>${showHeight(pokemon.height)}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>${showWeight(pokemon.weight)}</td>
                            </tr>
                        </table>
                        <table class="baseStats">
                            <tr>
                                <td>HP</td>
                                <td class="td_width">${pokemon.stats[0].base_stat}</td>
                                <td>
                                    <div style="width: 100px; background-color: #ddd; height: 6px; border: grey solid 1px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            width: ${pokemon.stats[0].base_stat / 2}px;
                                            height: 100%;
                                            background-color: ${pokemon.stats[0].base_stat <= 49 ? 'red' : 'green'};
                                            transition: width 0.3s ease;">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td class="td_width">${pokemon.stats[1].base_stat}</td>
                                <td>
                                    <div style="width: 100px; background-color: #ddd; height: 6px; border: grey solid 1px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            width: ${pokemon.stats[1].base_stat / 2}px;
                                            height: 100%;
                                            background-color: ${pokemon.stats[1].base_stat <= 49 ? 'red' : 'green'};
                                            transition: width 0.3s ease;">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td class="td_width">${pokemon.stats[2].base_stat}</td>
                                <td>
                                    <div style="width: 100px; background-color: #ddd; height: 6px; border: grey solid 1px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            width: ${pokemon.stats[2].base_stat / 2}px;
                                            height: 100%;
                                            background-color: ${pokemon.stats[2].base_stat <= 49 ? 'red' : 'green'};
                                            transition: width 0.3s ease;">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sp.Atk</td>
                                <td class="td_width">${pokemon.stats[3].base_stat}</td>
                                <td>
                                    <div style="width: 100px; background-color: #ddd; height: 6px; border: grey solid 1px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            width: ${pokemon.stats[3].base_stat / 2}px;
                                            height: 100%;
                                            background-color: ${pokemon.stats[3].base_stat <= 49 ? 'red' : 'green'};
                                            transition: width 0.3s ease;">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sp.Def</td>
                                <td class="td_width">${pokemon.stats[4].base_stat}</td>
                                <td>
                                    <div style="width: 100px; background-color: #ddd; height: 6px; border: grey solid 1px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            width: ${pokemon.stats[4].base_stat / 2}px;
                                            height: 100%;
                                            background-color: ${pokemon.stats[4].base_stat <= 49 ? 'red' : 'green'};
                                            transition: width 0.3s ease;">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td class="td_width">${pokemon.stats[5].base_stat}</td>
                                <td>
                                    <div style="width: 100px; background-color: #ddd; height: 6px; border: grey solid 1px; border-radius: 5px; overflow: hidden;">
                                        <div style="
                                            width: ${pokemon.stats[5].base_stat / 2}px;
                                            height: 100%;
                                            background-color: ${pokemon.stats[5].base_stat <= 50 ? 'red' : 'green'};
                                            transition: width 0.3s ease;">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="btn_container">
                    <button onclick="previousPokemon(${pokemon.id})" class="btn_left">&#11164;</button>
                    <button onclick="nextPokemon(${pokemon.id})" class="btn_right">&#11166;</button>
                </div>
            </div>
        </div>`
}