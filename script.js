const descricao = document.getElementById("descricao");
const imagens = document.getElementById("imagens");
const URL_API = "https://pokeapi.co/api/v2/pokedex/";


console.log(dados);

const buscarPokemon = pokemon => {
    const URL = fetch("https://pokeapi.co/api/v2/pokedex/");
    console.log(URL);
    const dados = URL.json()
    console.log(dados);
    
}