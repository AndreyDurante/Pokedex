const URL_API = "https://pokeapi.co/api/v2/pokedex/";


const buscarPokemon = async (pokemon) => {
    const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await URL.json()

    return dados;
}

const renderizar = async () => {
    const descricao = document.getElementById("descricao");
    const nome = document.getElementById("nome");
    const tipo = document.getElementById("tipo");
    const peso = document.getElementById("peso");
    const movimento = document.getElementById("movimento");
    const imagens = document.getElementById("imagens");
    const inputPokedex = document.getElementById("inputPokemon")
    
    const pokemon = inputPokedex.value;

    const dados = await buscarPokemon(pokemon)

    imagens.src = dados.sprites.front_default;
    nome.textContent = `Nome: ${dados.name}`
    tipo.textContent = `Tipagem: ${dados.types[0].type.name}`
    peso.textContent = `Peso: ${dados.weight} kg`
    movimento.textContent = `Movimento: ${dados.moves[0].move.name}`

    const cardsPrevios = document.getElementById("cardsPrevios");

    const card = document.createElement("article");
    card.className = "card-pequeno";

    card.innerHTML = `
        <main id="descricao-pequeno">
            <p class="descricoes-pequenas">
                Nome: ${dados.name}
            </p>

            <p class="descricoes-pequenas">
                Tipagem: ${dados.types[0].type.name}
            </p>

            <p class="descricoes-pequenas">
                Peso: ${dados.weight / 10} kg
            </p>

            <p class="descricoes-pequenas">
                Movimento: ${dados.moves[0].move.name}
            </p>
        </main>

        <div id="div-imagens-pequenas">
            <img 
                src="${dados.sprites.front_default}" 
                alt="imagem-pokemon-pequena"
                id="imagem-pequena"
            >
        </div>
    `;

    cardsPrevios.appendChild(card);
}

const botao = document.getElementById("botao")
botao.addEventListener('click', renderizar)
