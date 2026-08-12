const URL_API = "https://pokeapi.co/api/v2/pokedex/";


const buscarPokemon = async (pokemon) => {
    const URL = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const dados = await URL.json()
    console.log((dados));
}

const renderizar = () => {
    const descricao = document.getElementById("descricao");
    const imagens = document.getElementById("imagens");
    const inputPokedex = document.getElementById("inputPokemon")
    const numeroPokedex = inputPokedex.value

    imagens.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
    descricao.textContent = "dlkajwbdajwhbd"
}

renderizar()