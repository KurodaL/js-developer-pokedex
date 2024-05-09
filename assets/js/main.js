const pokemonList = document.getElementById('pokemonList')
const teste = document.getElementById('teste')
const loadMoreButton = document.getElementById('loadMoreButton')
const deloadButton = document.getElementById('deloadButton')
const viewMoreButton = document.getElementById('viewMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function toggleDeloadButtonVisibility() {
    if (offset == 0) {
        deloadButton.style.display = 'none'; 
    } else {
        deloadButton.style.display = 'inline'; 
    }
}

function convertPokemonToLi(pokemon) {
    return `
        <li onclick="detailedView()" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function pokemonDetailedView(pokemon) {
    retunr `
        
    `
}

function detailedView() {
    console.log('sexo')
}



function convertPokemonDetails(pokemon) {
    return `
        
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)
toggleDeloadButtonVisibility()

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

    toggleDeloadButtonVisibility()
})

deloadButton.addEventListener('click', () => {
    location.reload()
})
