# Pokédex

Projeto web que reproduz, de forma simplificada, a experiência de uma Pokédex. A aplicação permite consultar Pokémon por nome ou número e apresenta informações básicas, como nome, tipo, peso, movimento e imagem.

O objetivo principal do projeto é praticar o consumo de APIs no navegador utilizando JavaScript puro, sem frameworks ou bibliotecas externas.

## Funcionalidades

- Consulta de Pokémon por nome ou número.
- Exibição de nome, tipagem, peso, movimento e sprite do Pokémon.
- Histórico visual dos Pokémon pesquisados durante a sessão.
- Interface responsiva inspirada em uma Pokédex.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [PokéAPI](https://pokeapi.co/)

## Estrutura do projeto

```text
Pokedex/
├── img/           # Imagens utilizadas na interface
├── index.html     # Estrutura da página
├── style.css      # Estilos e responsividade
└── script.js      # Consumo da API e renderização dos dados
```

## API

Os dados são obtidos por meio da [PokéAPI](https://pokeapi.co/), uma API pública com informações sobre Pokémon. As requisições são realizadas com a API nativa `fetch` do JavaScript.
