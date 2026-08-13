const URL_API = "https://pokeapi.co/api/v2/pokedex/";


const buscarPokemon = async (pokemon) => {
    const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await URL.json()

    return dados;
}

const renderizar = async () => {
    const descricao = document.getElementById("descricao");
    const imagens = document.getElementById("imagens");
    const inputPokedex = document.getElementById("inputPokemon")
    
    const pokemon = inputPokedex.value;

    const dados = await buscarPokemon(pokemon)

    imagens.src = dados.sprites.front_default;
    descricao.textContent = dados.name
}

const botao = document.getElementById("botao")
botao.addEventListener('click', renderizar)